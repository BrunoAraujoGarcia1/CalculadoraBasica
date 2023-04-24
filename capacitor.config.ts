import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Calculadora',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      'Icon': 'resources/SeekPng.com_calculator-icon-png_1372126.png'
    }
  }
};

export default config;

