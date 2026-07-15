import { test, expect, type Page } from '@playwright/test'

const ICONS_STORIES = [
  'default',
  'color',
  'size',
  'disabled',
  'animated',
  'animations',
  'svg-props',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-icons--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root svg').first()).toBeVisible()
}

test.describe('Icons stories screenshots', () => {
  for (const storyId of ICONS_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
