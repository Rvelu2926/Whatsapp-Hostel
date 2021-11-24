import environment from './base'
const baseApi = 'http://www.your-production-api.com'
const env = environment(baseApi)
const prodEnv = {
  ...env,
}

export default prodEnv
