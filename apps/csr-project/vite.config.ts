import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // tsconfigPaths라는 플러그인으로 path alias 설정가능
  plugins: [react(), tsconfigPaths()],
});
