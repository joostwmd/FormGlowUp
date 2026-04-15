import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:5173');
	});

	test('signin page shows correct elements', async ({ page }) => {
		await page.goto('http://localhost:5173/signin');
		await expect(page.getByRole('button', { name: 'Sign In with Google' })).toBeVisible();
		await expect(page.getByText('This project is in development mode')).toBeVisible();
		await expect(page.getByText('authorized users list')).toBeVisible();
	});
});
