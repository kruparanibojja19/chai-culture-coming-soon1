import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue/svelte if you’re using those

export default defineConfig({
  base: '/chai-culture-coming-soon1/', // <-- add your repo name here
  plugins: [react()],
});

