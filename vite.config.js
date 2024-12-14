import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio/',  // Replace 'portfolio' with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure assets are handled correctly
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  }
})