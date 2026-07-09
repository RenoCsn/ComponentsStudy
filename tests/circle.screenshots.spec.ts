import { test, expect, type Page } from '@playwright/test'

const CIRCLE_STORIES = [
  'default',
  'not-loading',
  'finite',
  'finite-with-label-inside',
  'finite-with-label-top',
  'finite-with-label-right',
  'finite-with-label-bottom',
  'finite-with-label-left',
  'with-background',
  'color',
  'custom-color',
  'custom-speed',
  'custom-thickness',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(
    `/iframe.html?id=atoms-loadings-circle--${storyId}&viewMode=story`,
  )
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root .rounded-full').first()).toBeVisible()
}

test.describe('Circle loading stories screenshots', () => {
  for (const storyId of CIRCLE_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
