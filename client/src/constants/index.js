const defaultConfig = require('./default.json')

let f = function(appEnv) {
  if (!appEnv) {appEnv = 'local'}
  const protectedENVs = {
    APP_ENV: appEnv,
    ENV: appEnv
  }
  let envKeys = Object.assign(
    defaultConfig,
    require(`./${appEnv}.json`),
    protectedENVs
  )
  return envKeys
}

export default f(process.env.NODE_ENV)
