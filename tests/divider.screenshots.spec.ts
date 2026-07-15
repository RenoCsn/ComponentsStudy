import { test, expect, type Page } from '@playwright/test'

const DIVIDER_STORIES = [
  'default',
  'color',
  'custom-color',
  'orientation',
  'border-style',
  'size',
  'custom-size',
  'variant',
  'with-children',
  'has-blurry',
  'is-flex-item',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-divider--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root').locator('*').first()).toBeVisible()
}

test.describe('Divider stories screenshots', () => {
  for (const storyId of DIVIDER_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
