---
layout: default
title: CAS - Multifactor Authentication
category: Multifactor Authentication
---

{% include variables.html %}

# Multifactor Authentication (MFA)

CAS provides support for a variety of multifactor authentication providers and 
options, while allowing one to design their own. The secondary authentication 
factor always kicks in *after* the primary step and existing authentication 
sessions will be asked to step-up to the needed multifactor authentication 
factor, should the request or trigger require it. The satisfied authentication 
context is communicated back to the application as well to denote a successful 
multifactor authentication event.

At a minimum, you need answer the following questions:

- Which provider(s) are we using for multifactor authentication?
- How and for whom are we triggering multifactor authentication?

## Supported Providers

The following multifactor providers are supported by CAS.

| Provider             | Id             | Instructions                                               |
|----------------------|----------------|------------------------------------------------------------|
| Duo Security         | `mfa-duo`      | [See this guide](DuoSecurity-Authentication.html).         |
| Authy Authenticator  | `mfa-authy`    | [See this guide](AuthyAuthenticator-Authentication.html).  |
| YubiKey              | `mfa-yubikey`  | [See this guide](YubiKey-Authentication.html).             |
| RSA/RADIUS           | `mfa-radius`   | [See this guide](RADIUS-Authentication.html).              |
| WiKID                | `mfa-radius`   | [See this guide](RADIUS-Authentication.html).              |
| Google Authenticator | `mfa-gauth`    | [See this guide](GoogleAuthenticator-Authentication.html). |
| FIDO U2F             | `mfa-u2f`      | [See this guide](FIDO-U2F-Authentication.html).            |
| FIDO2 WebAuthN       | `mfa-webauthn` | [See this guide](FIDO2-WebAuthn-Authentication.html).      |
| CAS Simple           | `mfa-simple`   | [See this guide](Simple-Multifactor-Authentication.html).  |
| Inwebo               | `mfa-inwebo`   | [See this guide](Inwebo-Authentication.html).              |
| Custom               | Custom         | [See this guide](../mfa/Custom-MFA-Authentication.html).   |

<div class="alert alert-info"><strong>Azure Multifactor</strong>
<p>Microsoft has removed the ability for external SSO servers to use Azure MFA. To use Azure MFA, 
you must also have all your users authenticate using Azure AD SSO.
You may want to route authentication requests to Azure AD SSO using the 
delegated authentication features of CAS.</p></div>

## Core Configuration

{% include_cached casproperties.html properties="cas.authn.mfa.core" %}

## Triggers

Multifactor authentication can be activated via a number of triggers.
To learn more, [please see this guide](Configuring-Multifactor-Authentication-Triggers.html).

## Bypass Rules

Each multifactor provider is equipped with options to allow for MFA 
bypass. To learn more, [please see this guide](../mfa/Configuring-Multifactor-Authentication-Bypass.html).

## Failure Modes

CAS will consult the current configuration in the event that the provider being requested is unreachable to determine how to proceed. To learn more, [please see this guide](../mfa/Configuring-Multifactor-Authentication-FailureModes.html).

## Multiple Provider Selection

In the event that multiple multifactor authentication providers are determined for a 
multifactor authentication transaction, by default CAS will attempt to sort the 
collection of providers based on their rank and will pick one with the highest 
priority. This use case may arise if multiple triggers are defined where each 
decides on a different multifactor authentication provider, or the same 
provider instance is configured multiple times with many instances.

Provider selection may also be carried out using Groovy scripting strategies more dynamically. 
The following example should serve as an outline of how to select multifactor providers based on a Groovy script:

```groovy
import java.util.*

class SampleGroovyProviderSelection {
    String run(final Object... args) {
        def service = args[0]
        def principal = args[1]
        def providersCollection = args[2]
        def logger = args[3]
        ...
        return "mfa-duo"
    }
}
```

The parameters passed are as follows:

| Parameter             | Description
|-------------------------------------------------------------------------------------------------------------------
| `service`             | The object representing the incoming service provided in the request, if any.
| `principal`           | The object representing the authenticated principal along with its attributes.
| `providersCollection` | The object representing the collection of candidate multifactor providers qualified for the transaction.
| `logger`              | The object responsible for issuing log messages such as `logger.info(...)`.


## Ranking Providers

At times, CAS needs to determine the correct provider when step-up authentication is required. Consider for a moment that CAS
already has established an SSO session with/without a provider and has reached a level of authentication. Another incoming
request attempts to exercise that SSO session with a different and often competing authentication requirement that may differ
from the authentication level CAS has already established. Concretely, examples may be:

- CAS has achieved an SSO session, but a separate request now requires step-up authentication with DuoSecurity.
- CAS has achieved an SSO session with an authentication level satisfied by DuoSecurity, but a separate request now requires step-up authentication with YubiKey.

In certain scenarios, CAS will attempt to rank authentication levels and compare them with each other. If CAS already has achieved a level
that is higher than what the incoming request requires, no step-up authentication will be performed. If the opposite is true, CAS will
route the authentication flow to the required authentication level and upon success, will adjust the SSO session with the new higher
authentication level now satisfied.

Ranking of authentication methods is done per provider via specific properties for each in CAS settings. Note that
the higher the rank value is, the higher on the security scale it remains. A provider that ranks higher with a larger weight value trumps
and override others with a lower value.


## Trusted Devices/Browsers

CAS is able to natively provide trusted device/browser features as part of 
any multifactor authentication flow. While certain providers tend to 
support this feature as well, this behavior is now put into 
CAS directly providing you with exact control over how devices/browsers are checked, 
how is that decision remembered for subsequent requests and how you might allow 
delegated management of those trusted decisions both for admins and end-users.

[See this guide for more info](Multifactor-TrustedDevice-Authentication.html).

## 2FA vs. MFA

Multifactor authentication in CAS mostly presents itself in form of two-factor 
authentication when deployed. The framework however is designed in such a way to allow additional chaining of other 
providers into an existing authentication experience. If you have a need 
to string along multiple factors together one after another, it is likely 
that you may need to adjust and extend the existing authentication workflows to deliver the use case.

