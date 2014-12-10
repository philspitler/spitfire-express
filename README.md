#Spitfire-Express

##Express Middleware for generating and using dynamic RESTful resources.

###General Usage
Mount it to a route and give it a database name or connection string.

```javascript
var api = require(‘spitfire-express’)(‘mydb’); //whatever db name you’d like

app.use(‘/api’, api);
```
As an example, now you can call /api/forums with POST and create a new resource.  You will be returned the created resource complete with ID from the database.

Call it with a GET like /api/forums/[id-returned-from-post] and you’ll get back your resource.

###More Documentation
More documentation to come.
