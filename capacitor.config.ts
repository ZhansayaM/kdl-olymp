import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: `com.rocketfirm.${process.env.APP_NAME}`,
  appName: process.env.APP_NAME,
  webDir: './dist',
  bundledWebRuntime: false,
}

export default config
