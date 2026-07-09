import { test, expect, type Page } from '@playwright/test'

const DOTS_STORIES = [
  'default',
  'not-loading',
  'size',
  'custom-interval',
  'max-dots',
  'color',
  'custom-color',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-loadings-dots--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root')).toBeVisible()
  await page.waitForTimeout(500)
}

test.describe('Dots loading stories screenshots', () => {
  for (const storyId of DOTS_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
