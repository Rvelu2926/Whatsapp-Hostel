import environment from './base'
const baseApi = 'http://localhost:1234'
const env = environment(baseApi)
const devEnv = {
  ...env,
  intervals: {
    ...env.intervals,
    logout: 300, // 5 min in seconds
  },
  isProduction: false,
  isDevelopment: true,
}

export default devEnv
