import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		// Playwright specs live under tests/e2e; they must run with `playwright test`, not Vitest.
		include: ['tests/unit/**/*.test.ts', 'tests/integration/**/*.test.ts']
	}
});
