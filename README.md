Timestamp API for freecodeCamp
=================

Made for the backend certification.

The url is `<project_url>/api/timestamp/{date}`

## with a valid date  `<project url>/api/timestamp/2015-12-25`

return the unix timestamps and the date in [ISO8601](https://fr.wikipedia.org/wiki/ISO_8601])

```
{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
```

## with a unix timestamp`<project url>api/timestamp/1450137600000`

```
{"unix":1450137600000,"utc":"Tue, 15 Dec 2015 00:00:00 GMT"}
```
## if no timestamp provided give the current time `<project url>api/timestamp`
```
{"unix":1556124209553,"utc":"Wed, 24 Apr 2019 16:43:29 GMT"}
```


Made with [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
