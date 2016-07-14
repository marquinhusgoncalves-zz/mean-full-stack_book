module.exports = {
  env: 'production',
  db: process.env.$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/ + 'contatooh',
  clientID: process.env.admin,
  clientSecret: process.env.jb3QfRG4SULj,
  port: process.env.8080,
  address: 
}