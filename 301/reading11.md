# OAuth definition
- OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

- [info on OAuth](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)


# Authentication and Authorization flows
- this is a compare and contrast of authorization and authentication to show how they protect applications in complimentary ways. 

## Authentication 
- Determines wether users are who they claim to be
- challenges the user to validate credentials
- usually done before authorization
- generally, transmits info through an ID token
- generally governed by the 'OpenID Connect(OIDC) protocol'

## Authorization
- determines what users can and cannot access
- verifies wether access is allowed through policies and rules
- usually done after successful authentication
- generally transmits info through an Access Token
- generally governed by the OAuth 2.0 framework