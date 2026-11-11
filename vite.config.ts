// @ts-nocheck
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function testimonialsPlugin() {
  const filePath = path.resolve(__dirname, 'src/data/stored_testimonials.json');
  return {
    name: 'testimonials-api',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url === '/api/testimonials' && req.method === 'GET') {
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.end(data || '[]');
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.end('[]');
          }
          return;
        }
        if (req.url === '/api/testimonials' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const newEntry = JSON.parse(body);
              let existing = [];
              if (fs.existsSync(filePath)) {
                try {
                  existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                } catch {
                  existing = [];
                }
              }
              const entryWithMeta = {
                ...newEntry,
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                isLive: true
              };
              existing.unshift(entryWithMeta);
              fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, item: entryWithMeta }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), testimonialsPlugin()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: { motion: ['framer-motion'], react: ['react', 'react-dom'] },
      },
    },
  },
});
