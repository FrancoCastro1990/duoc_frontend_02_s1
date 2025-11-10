/// <reference types="vite/client" />

// Type declaration for Tailwind CSS configuration
declare module 'tailwindcss' {
  export interface Config {
    content?: string[]
    theme?: {
      extend?: Record<string, any>
    }
    plugins?: any[]
  }

  const config: Config
  export default config
}
