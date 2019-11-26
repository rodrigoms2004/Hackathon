module.exports = {
  apiPort : 3000,
  logdir: 'log',
  secretKey: '9A7FA52CFE3E4896943D83AF7EC11',
  db_id: 0,
  api_token_expiration_time: "1d",
  authorizationKey: '137B268C15EA3486C23A88AA91B1A',
  mysqlPool: [
    {
      "client"    : "mysql",
      "version"   : "5.7",
      "connection": {
          "host"      : "172.16.187.128",
          "user"      : "user",
          "password"  : "pass",
          "database"  : "rocket_hackathon",
          "port"      : "3306"
      }
    }
  ],
  "itemsPerPage": 100
}

