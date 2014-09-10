'use strict';

var port    = process.env.PORT,
    db      = process.env.DB,
    express = require('express'),
    app     = express();

require('./lib/config')(app);
require('./routes/routes')(app, express);

require('./lib/mongodb')(db, function(){
  app.listen(port);
});

module.exports = app;

