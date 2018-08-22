## Express Request Object

- **request.params**: URL parameters
- **request.query**: query string parameters
- **request.route**: current route as a string
- **request.cookies**: cookies, requires cookieParser
- **request.signedCookies**: signed cookies, requires cookie-parser
- **request.body**: body/payload, requires body-parser
- **request.headers**: headers  

#### Request Header Shortcuts

- **request.get(headerKey)**: value for the header key
- **request.accepts(type)**: checks if the type is accepted
- **request.acceptsLanguage(language)**: checks language
- **request.acceptsCharset(charset)**: checks charset
- **request.is(type)**: checks the type
- **request.ip**: IP address
- **request.ips**: IP addresses (with trust-proxy on)
- **request.path**: URL path
- **request.host**: host without port number
- **request.fresh**: checks freshness
- **request.stale**: checks staleness
- **request.xhr**: true for AJAX-y requests
- **request.protocol**: returns HTTP protocol
- **request.secure**: checks if protocol is https
- **request.subdomains**: array of subdomains
- **request.originalUrl**: original URL