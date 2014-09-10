'use strict';

var chalk = require('chalk');

exports.info = function(req, res, next){
  var debug = process.env.DEBUG * 1;

  if(debug){
    console.log(chalk.bgRed('--------------------------------------------------------------------------------'));
    console.log(chalk.bold.red('TIME   :'), chalk.bold.blue(new Date()));
    console.log(chalk.bold.red('PORT   :'), process.env.PORT);
    console.log(chalk.bold.red('DB     :'), process.env.DB);
    console.log(chalk.bold.red('URL    :'), req.url);
    console.log(chalk.bold.red('VERB   :'), req.method);
    console.log(chalk.bold.red('SESSID :'), req.sessionID);
    console.log(chalk.bold.green('PARAMS :'), req.params);
    console.log(chalk.bold.green('QUERY  :'), req.query);
    console.log(chalk.bold.green('BODY   :'), req.body);
    console.log(chalk.bold.green('USER   :'), req.user);
    console.log(chalk.bold.green('LOCALS :'), res.locals);
    console.log(chalk.bold.green('FLASH  :'), req.session.flash);
    console.log(chalk.bold.green('SESSION:'), req.session);

    if(debug === 2){
      console.log(chalk.bgBlue('--------------------------------------------------------------------------------'));
      console.log(chalk.bold.red('HEADERS:'), req.headers);
      console.log(chalk.bgBlue('--------------------------------------------------------------------------------'));
      console.log(chalk.bold.red('ENV    :'), process.env);
    }

    console.log(chalk.bgRed('--------------------------------------------------------------------------------'));
  }

  next();
};

