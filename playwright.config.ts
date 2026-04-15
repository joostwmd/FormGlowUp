// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests/e2e',
	timeout: 30000,
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:5173',
		reuseExistingServer: !process.env.CI,
		timeout: 120000
	},
	use: {
		baseURL: 'http://localhost:5173',
		trace: 'on-first-retry'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	]
};

export default config;
