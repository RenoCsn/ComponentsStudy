import { test, expect } from '@playwright/test'

test.describe('Storybook working', () => {
  test('Button primary variant is visible', async ({ page }) => {
    await page.goto('http://localhost:6006')
    await expect(page.getByRole('link', { name: 'Storybook' })).toBeVisible()
  })
})
