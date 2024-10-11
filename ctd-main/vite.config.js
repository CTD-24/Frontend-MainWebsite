import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/',
    define: {
      'import.meta.env': {
        VITE_TEAM_EXIST_URL: JSON.stringify(env.VITE_TEAM_EXIST_URL),
        VITE_REG_URL: JSON.stringify(env.VITE_REG_URL),
        VITE_UTR_EXIST_URL: JSON.stringify(env.VITE_UTR_EXIST_URL)
      }
    },
    plugins: [react()],
  }
});
