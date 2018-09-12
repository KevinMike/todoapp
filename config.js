var env = process.env.NODE_ENV || 'prod';

module.exports.dbConnectionString = (env == 'dev') ?
    'mongodb://localhost:27017/Todo' :
    'x';