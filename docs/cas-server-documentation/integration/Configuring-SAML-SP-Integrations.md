---
layout: default
title: CAS - SAML SP Integrations
category: Integration
---

{% include variables.html %}

# SAML SP Integrations

CAS provides built-in integration support for a number of SAML2 service providers. Configuring these service providers
is about declaring the relevant properties in the CAS configuration as well as the configuration module below. Each integration,
when configured appropriately, will register the service provider with the CAS service registry as a SAML SP and will follow
a recipe (that is documented by the SP publicly) to configure attribute release policies, name ids and entity IDs. If you need to,
you can review the registration record inside the CAS service registry to adjust options.

**NOTE:** In the event that special attributes and/or name ids are required for the integration, you are required
to ensure all such [attributes are properly resolved](Attribute-Resolution.html) and are available to the CAS principal.

<div class="alert alert-warning"><strong>Remember</strong><p>SAML2 service provider integrations listed here attempt to automate CAS configuration based on known and documented integration guidelines and recipes provided by the service provider owned by the vendor. These recipes can change and break CAS over time and needless to say, they need to be properly and thoroughly tested as the project itself does not have a subscription to each application to test for correctness. YMMV. If you find an issue with an automated integration strategy here, please <strong>speak up</strong>.</p></div>

Support is enabled by including the following module in the WAR Overlay:

{% include_cached casmodule.html group="org.apereo.cas" module="cas-server-support-saml-sp-integrations" %}

The following SAML SP integrations, as samples, are provided by CAS:

<div class="img-cloud">
<a href="#">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052578/47d6f570-dd60-11e6-8f03-02cb99d6106d.gif" height="48" width="110"></a> 

<a href="https://zoom.us">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052568/475f36d4-dd60-11e6-84f4-a88eb33f3f0a.jpg" height="30" width="110"></a> 

<a href="https://www.dropbox.com/guide/admin/security/configure-single-sign-on">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052575/47ba8930-dd60-11e6-8cb1-9334066d5f0f.png" height="48" width="140"></a> 

<a href="https://samanage.com">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052581/47e7bcfc-dd60-11e6-85e9-c09926736e5e.png" height="48" width="140"></a> 

<a href="https://help.salesforce.com/HTViewHelpDoc?id=sso_saml.htm">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052579/47da9d74-dd60-11e6-8eac-d66b67e2ebf7.png" height="60" width="100"></a>

<a href="https://box.com">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052572/47ace302-dd60-11e6-9842-4eda5a9ab5cf.png" height="48" width="90"></a> 

<a href="http://servicenow.com">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052583/4805e2c2-dd60-11e6-8150-80aaa4bbab0e.png" height="20" width="100"></a> 

<a href="http://www.workday.com/">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052587/4816e04a-dd60-11e6-9ceb-6ccec1290e19.png" height="48" width="100"></a>

<a href="https://help.webex.com/en-us/article/g5ey83/Configure-Single-Sign-On-for-Cisco-Webex-Site">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052574/47af8206-dd60-11e6-95d0-5827e0d88d73.jpg" height="48" width="100"></a>

<a href="https://powerfaids.collegeboard.org">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052570/47abea6a-dd60-11e6-85a0-387c3c2ce8e7.png" height="48" width="140"></a> 

<a href="https://msdn.microsoft.com/en-us/library/azure/dn641269.aspx">
<img src="https://cloud.githubusercontent.com/assets/1205228/22053102/d64da904-dd63-11e6-8a68-977526634b9d.png" height="48" width="110"></a> 

<a href="https://asana.com/guide/help/premium/authentication#gl-saml">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052569/478b8c16-dd60-11e6-82f4-e292243ff076.png" height="48" width="100"></a> 

<a href="https://onlinehelp.tableau.com/current/server/en-us/saml_requ.htm">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052586/480cffc6-dd60-11e6-939c-1ceb34f3186d.png" height="48" width="140"></a> 

<a href="https://evernote.com">
<img src="https://cloud.githubusercontent.com/assets/1205228/22052577/47d6b6e6-dd60-11e6-810e-dd875bf25d17.png" height="48" width="110"></a> 

<a href="http://www.ellucian.com/Software/Colleague-WebAdvisor/">
<img src="https://cloud.githubusercontent.com/assets/1205228/23185912/5c3f2f50-f89a-11e6-8450-6da44a1a9d9d.png" height="48" width="140"></a>

<a href="https://docs.openathens.net">
<img src="https://cloud.githubusercontent.com/assets/1205228/24070833/ffb5f63a-0bd9-11e7-8bda-28301c37188b.png" height="48" width="140"></a>

<a href="http://server.arcgis.com/en/portal/latest/administer/linux/configuring-a-saml-compliant-identity-provider-with-your-portal.htm">
<img src="https://cloud.githubusercontent.com/assets/1205228/24108414/c3851e14-0da2-11e7-97d7-086a93d6873d.png" height="48" width="130"></a>

<a href="https://helpx.adobe.com/enterprise/kb/configure_shibboleth_idp_for_use_with_Adobe_SSO.html">
<img src="https://cloud.githubusercontent.com/assets/1205228/24562072/ac5964ec-165e-11e7-9986-92108c30eb9b.png" height="48" width="90"></a>

<a href="https://www.academicworks.com/why-academicworks/user-authentication/">
<img src="https://cloud.githubusercontent.com/assets/1205228/24624808/3c5909b6-18c2-11e7-9922-52ee604aff55.png" height="48" width="200"></a>

<a href="#">
<img src="https://cloud.githubusercontent.com/assets/1205228/24698286/4c4d8740-1a05-11e7-844e-54d328e64e2f.png" height="48" width="120"></a>

<a href="https://sc.edu">
<img src="https://cloud.githubusercontent.com/assets/1205228/24699366/fbfbcf5a-1a08-11e7-9664-f37d6e50a5a3.png" height="48" width="120"></a>

<a href="https://get.slack.help/hc/en-us/articles/205168057">
<img src="https://cloud.githubusercontent.com/assets/1205228/24858382/5b15c512-1e01-11e7-87ac-f0b091cd7885.png" height="48" width="110"></a>

<a href="https://support.zendesk.com/hc/en-us/articles/203663676-Using-SAML-for-single-sign-on-Professional-and-Enterprise-">
<img src="https://cloud.githubusercontent.com/assets/1205228/24858342/34441006-1e01-11e7-9209-9b78081de4db.png" height="48" width="120"></a>

<a href="https://www.gartner.com/">
<img src="https://cloud.githubusercontent.com/assets/1205228/25349422/a29a98f6-28d6-11e7-9d10-e286d0080cbe.png" height="48" width="90"></a>

<a href="https://www.cherwell.com/">
<img src="https://user-images.githubusercontent.com/1205228/30205883-84174ebc-949f-11e7-9afc-a66c2ab19f59.png" height="48" width="110"></a>

<a href="https://www.bynder.com">
<img src="https://user-images.githubusercontent.com/1205228/30205852-69921a5e-949f-11e7-8326-ba4c00fceba4.png" height="48" width="120"></a>

<a href="https://www.everbridge.com/">
<img src="https://user-images.githubusercontent.com/1205228/30205910-a560ec90-949f-11e7-8485-e3a833f8109b.png" height="48" width="120"></a>

<a href="#">
<img src="https://user-images.githubusercontent.com/1205228/30221936-5e90af04-94da-11e7-8046-483fc26a1c01.png" height="48" width="170"></a>

<a href="https://newrelic.com">
<img src="https://user-images.githubusercontent.com/1205228/30247067-541cef96-9620-11e7-88d7-c3749ba55ecf.png" height="48" width="90"></a>

<a href="https://www.egnyte.com/">
<img src="https://user-images.githubusercontent.com/1205228/30247063-218f3962-9620-11e7-9ba4-54f7112fee13.png" height="48" width="120"></a>

<a href="https://www.yuja.com/">
<img src="https://user-images.githubusercontent.com/1205228/30271142-6dd0b58c-9704-11e7-9138-0b86d5799403.png" height="48" width="100"></a>

<a href="https://www.symplicity.com/">
<img src="https://user-images.githubusercontent.com/1205228/30271318-192b48fc-9705-11e7-9c18-3be401a39e84.png" height="48" width="200"></a>

<a href="Google-Apps-Integration.html">
<img src="https://cloud.githubusercontent.com/assets/1205228/25385497/18e09c84-2979-11e7-94c1-5ad430b3d768.png" height="48" width="120"></a>

<a href="http://www.accruent.com/">
<img src="https://user-images.githubusercontent.com/1205228/30735450-f9a12792-9f8b-11e7-941d-7ab4ac7628b9.png" height="48" width="120"></a>

<a href="https://docs.gitlab.com/ee/administration/auth/">
<img src="https://user-images.githubusercontent.com/1205228/33747990-4d8da06e-db83-11e7-9551-f52630f7d4f0.png" height="38" width="120"></a>

<a href="https://www.appdynamics.com/">
<img src="https://user-images.githubusercontent.com/1205228/33800340-3c2c072e-dcfb-11e7-9f10-7a7b2488c9b2.png" height="58" width="120"></a>

<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">
<img src="https://user-images.githubusercontent.com/1205228/34523704-d33a2054-f0ad-11e7-9fd7-444c30772a2a.png" height="58" width="120"></a>

<a href="https://www.concursolutions.com/">
<img src="https://user-images.githubusercontent.com/1205228/36302734-ca3327ae-12c6-11e8-836f-e9a1550253d2.png" height="58" width="170"></a>

<a href="https://www.polleverywhere.com/">
<img src="https://user-images.githubusercontent.com/1205228/36302795-026f57d2-12c7-11e8-931e-0f8700df1864.png" height="58" width="180"></a>

<a href="https://www.blackbaud.com/files/support/helpfiles/auth/content/auth-saml.html">
<img src="https://user-images.githubusercontent.com/1205228/39860502-c72d1614-5452-11e8-956d-28a4b3a7a757.png" height="58" width="150"></a>

<a href="#">
<img src="https://user-images.githubusercontent.com/1205228/39876988-eb009f5c-5489-11e8-8b74-940f75997f41.png" height="58" width="130"></a>

<a href="https://www.warpwire.com/">
<img src="https://user-images.githubusercontent.com/1205228/39861404-b73f4bca-5455-11e8-9035-e0ecf1f8dcd0.png" height="58" width="150"></a>

<a href="https://rocket.chat/docs/administrator-guides/authentication/saml/">
<img src="https://user-images.githubusercontent.com/1205228/39877039-1128c7ae-548a-11e8-8735-1abf90883df6.png" height="58" width="150"></a>

<a href="https://armssoftware.com/">
<img src="https://user-images.githubusercontent.com/1205228/55328877-35e0a400-5442-11e9-8848-cda5a9efe1c5.png" height="50" width="100"></a>

<a href="https://www.ahpcare.com/">
<img src="https://user-images.githubusercontent.com/1205228/55275480-e5334480-52a3-11e9-982a-1fad518258c5.png" height="50" width="190"></a>

<a href="https://www.neogov.com/">
<img src="https://user-images.githubusercontent.com/1205228/55275543-f3359500-52a4-11e9-9407-02ba4fc21a80.png" height="38" width="120"></a>

<a href="https://www.conexed.com/">
<img src="https://user-images.githubusercontent.com/1205228/55275622-ff6e2200-52a5-11e9-833d-f48518e58d0e.png" height="58" width="170"></a>

<a href="#">
<img src="https://user-images.githubusercontent.com/1205228/55275721-62ac8400-52a7-11e9-89c2-121f2c494920.png" height="98" width="90"></a>

<a href="https://www.zimbra.com/">
<img src="https://user-images.githubusercontent.com/1205228/55322014-f14c0d00-542f-11e9-9355-3dd766ea56e6.png" height="68" width="160"></a>

<a href="https://www.atlassian.com/software/confluence">
<img src="https://user-images.githubusercontent.com/1205228/55322216-97981280-5430-11e9-9ea3-b3682cb67ff1.png" height="68" width="130"></a>

<a href="https://www.atlassian.com/software/jira">
<img src="https://user-images.githubusercontent.com/1205228/55322296-cb733800-5430-11e9-93e7-0f57e1a1ae89.png" height="78" width="90"></a>

<a href="#">
<img src="https://user-images.githubusercontent.com/1205228/55322626-b34fe880-5431-11e9-8574-74cc9ab9643f.png" height="78" width="120"></a>

<a href="https://www.crashplan.com/">
<img src="https://user-images.githubusercontent.com/1205228/55322944-7f28f780-5432-11e9-8dd0-e999f0b6e03e.png" height="78" width="120"></a>

<a href="https://www.docusign.com/">
<img src="https://user-images.githubusercontent.com/1205228/55340232-1c972200-5459-11e9-87d2-53e1eccef8b8.png" height="78" width="150"></a>

<a href="https://www.safaribooksonline.com/">
<img src="https://user-images.githubusercontent.com/1205228/55340518-b65ecf00-5459-11e9-9941-3b0e80ceaf73.png" height="78" width="110"></a>

<a href="https://www.tophat.com/">
<img src="https://user-images.githubusercontent.com/1205228/55340927-89f78280-545a-11e9-81fb-baf0413bcbfa.png" height="48" width="140"></a>
 
<a href="https://myemma.com/">
<img src="https://user-images.githubusercontent.com/1205228/55434382-58f77a80-554c-11e9-8494-1c6a830b532c.png" height="48" width="140"></a>

<a href="https://www.qualtrics.com">
<img src="https://user-images.githubusercontent.com/1205228/55434613-d3c09580-554c-11e9-83ef-6b5805d7424e.png" height="48" width="140"></a>

</div>

<div class="alert alert-info"><strong>Configure Once, Run Everywhere</strong>
<p>If you have developed a recipe for integrating
with a SAML service provider, consider contributing that recipe to the project so its configuration
can be automated once and for all to use. Let the change become a feature of the project, 
rather than something you alone have to maintain.</p></div>

## Configuration

Allow CAS to register and enable a number of built-in SAML service provider integrations.

<div class="alert alert-warning"><strong>Remember</strong><p>SAML2 service provider integrations listed 
here attempt to automate CAS configuration based on known and documented integration 
guidelines and recipes provided by the service provider owned by the vendor. These 
recipes can change and break CAS over time.</p></div>

The settings defined for each service provider attempt to automate the creation of
SAML service definition and nothing more. If you find the applicable settings lack in certain areas, it
is best to fall back onto the native configuration strategy for registering
SAML service providers with CAS which would depend on your service registry of choice.

The SAML2 service provider supports the following settings:

| Name                 | Description                                                                                          |
|----------------------|------------------------------------------------------------------------------------------------------|
| `metadata`           | Location of metadata for the service provider (i.e URL, path, etc)                                   |
| `name`               | The name of the service provider registered in the service registry.                                 |
| `description`        | The description of the service provider registered in the service registry.                          |
| `name-id-attribute`  | Attribute to use when generating name ids for this service provider.                                 |
| `name-id-format`     | The forced NameID Format identifier (i.e. `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`). |
| `attributes`         | Attributes to release to the service provider, which may virtually be mapped and renamed.            |
| `signature-location` | Signature location to verify metadata.                                                               |
| `entity-ids`         | List of entity ids allowed for this service provider.                                                |
| `sign-responses`     | Indicate whether responses should be signed. Default is `true`.                                      |
| `sign-assertions`    | Indicate whether assertions should be signed. Default is `false`.                                    |

The only required setting that would activate the automatic configuration for a
service provider is the presence and definition of metadata. All other settings are optional.
     
{% include_cached casproperties.html properties="cas.saml-sp" %}

**Note**: For InCommon and other metadata aggregates, multiple entity ids can be specified to
filter the InCommon metadata. EntityIds can be regular expression patterns and are mapped to
CAS' `serviceId` field in the registry. The signature location MUST BE the public key used to sign the metadata.

## Google Apps

The Google Apps SAML integration is also provided by 
CAS natively [based on this guide](Google-Apps-Integration.html).
