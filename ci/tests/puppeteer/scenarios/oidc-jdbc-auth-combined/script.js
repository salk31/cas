const puppeteer = require('puppeteer');
const cas = require('../../cas.js');
const assert = require('assert');

(async () => {
    const browser = await puppeteer.launch(cas.browserOptions());
    const page = await cas.newPage(browser);

    let url1 = "https://httpbin.org/anything/sample1";
    await cas.logg(`Trying with URL ${url1}`);
    let payload = await getPayload(page, url1, "client1", "secret1");
    let decoded = await cas.decodeJwt(payload.id_token);
    assert(decoded.sub === "CAS@EXAMPLE.ORG");
    assert(decoded["preferred_username"] === "CAS@EXAMPLE.ORG");

    let url2 = "https://httpbin.org/anything/sample2";
    await cas.logg(`Trying with URL ${url2}`);
    payload = await getPayload(page, url2, "client2", "secret2");
    decoded = await cas.decodeJwt(payload.id_token);
    assert(decoded.sub === "CASUSER");
    assert(decoded["preferred_username"] === "CASUSER");

    await browser.close();
})();

async function getPayload(page, redirectUri, clientId, clientSecret) {
    const url = `https://localhost:8443/cas/oidc/authorize?response_type=code&client_id=${clientId}&scope=openid%20profile%20email&redirect_uri=${redirectUri}`;
    await cas.goto(page, url);
    console.log(`Page URL: ${page.url()}`);
    await page.waitForTimeout(1000);
    
    if (await cas.isVisible(page, "#username")) {
        await cas.loginWith(page, "casuser", "Mellon");
        await page.waitForTimeout(1000)
    }
    if (await cas.isVisible(page, "#allow")) {
        await cas.click(page, "#allow");
        await page.waitForNavigation();
    }

    let code = await cas.assertParameter(page, "code");
    console.log(`Current code is ${code}`);
    const accessTokenUrl = `https://localhost:8443/cas/oidc/token?grant_type=authorization_code`
        + `&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`;
    await cas.goto(page, accessTokenUrl);
    console.log(`Page URL: ${page.url()}`);
    await page.waitForTimeout(1000);
    let content = await cas.textContent(page, "body");
    const payload = JSON.parse(content);
    console.log(payload);
    return payload;
}
