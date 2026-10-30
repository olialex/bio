import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // Configuración del servidor de desarrollo local
  server: {
    port: 3000,      // Cambia el puerto si lo deseas (por defecto es 5173)
    open: true       // Abre la aplicación en el navegador automáticamente
  },

  // Configuración para la compilación final (build de producción)
  build: {
    outDir: 'dist',   // Carpeta donde se genera el build
    sourcemap: true   // Genera sourcemaps para facilitar el debugging en producción
  },

  // Alias para importaciones más limpias (opcional)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})