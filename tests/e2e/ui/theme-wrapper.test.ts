import { test, expect } from '@playwright/test';

test.describe('Theme Wrapper Styling', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:5173/form/test-form/edit');
		await page.getByText('Customize your Form', { exact: true }).waitFor({ state: 'visible' });
		await page.getByText('Customize your Form', { exact: true }).click();
	});

	test('applies theme colors when theme is changed', async ({ page }) => {
		await page.locator('button', { hasText: 'Blue' }).first().waitFor({ state: 'visible' });
		await page.locator('button', { hasText: 'Blue' }).first().click();
		await expect(page.locator('div[style*="--theme-primary"]')).toBeVisible();
	});

	test('updates border radius when radius is changed', async ({ page }) => {
		await page.locator('div', { hasText: 'Radius' }).waitFor({ state: 'visible' });
		await page.locator('button', { hasText: '0.5' }).first().click();

		const wrapper = page.locator('div[style*="--radius"]');
		await expect(wrapper).toBeVisible();
	});

	test('changes font family when font is selected', async ({ page }) => {
		await page.getByRole('combobox').waitFor({ state: 'visible' });
		await page.getByRole('combobox').click();

		await page.getByRole('option', { name: 'Arial' }).waitFor({ state: 'visible' });
		await page.getByRole('option', { name: 'Arial' }).click();

		await expect(page.getByText('Arial')).toBeVisible();
	});

	test('toggles between light and dark modes', async ({ page }) => {
		await page.locator('div', { hasText: 'Mode' }).waitFor({ state: 'visible' });

		await page.locator('button', { hasText: 'Dark' }).waitFor({ state: 'visible' });
		await page.locator('button', { hasText: 'Dark' }).click();

		await expect(page.locator('[data-mode="dark"]')).toBeVisible();

		await page.locator('button', { hasText: 'Light' }).waitFor({ state: 'visible' });
		await page.locator('button', { hasText: 'Light' }).click();

		await expect(page.locator('[data-mode="dark"]')).not.toBeVisible();
	});
});
