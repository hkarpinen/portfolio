export function getEnvironmentVariable(varName: string) {
  const value = process.env[varName]
  if (!value) {
    throw new Error(`Environment variable ${varName} not found`)
  }
  return value
}
