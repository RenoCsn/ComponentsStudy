import { test, expect, type Page } from '@playwright/test'

const LINK_STORIES = [
  'default',
  'color',
  'custom-color',
  'text-decoration-color',
  'text-decoration-custom-color',
  'text-decoration-thickness',
  'animated',
  'animations',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-link--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root').getByRole('link').first()).toBeVisible()
}

test.describe('Link stories screenshots', () => {
  for (const storyId of LINK_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
