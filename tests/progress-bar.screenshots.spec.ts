import { test, expect, type Page } from '@playwright/test'

const PROGRESS_BAR_STORIES = [
  'default',
  'not-loading',
  'finite',
  'finite-not-loading',
  'finite-with-label-top',
  'finite-with-label-right',
  'finite-with-label-bottom',
  'finite-with-label-left',
  'without-background',
  'color',
  'custom-color',
  'custom-background-color',
  'custom-speed',
  'reverse',
  'with-children',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(
    `/iframe.html?id=atoms-loadings-progressbar--${storyId}&viewMode=story`,
  )
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root').locator('*').first()).toBeVisible()
}

test.describe('ProgressBar loading stories screenshots', () => {
  for (const storyId of PROGRESS_BAR_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
