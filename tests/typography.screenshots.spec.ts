import { test, expect, type Page } from '@playwright/test'

const TYPOGRAPHY_STORIES = [
  'default',
  'color',
  'custom-color',
  'align',
  'variant',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-typography--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(
    page.locator('#storybook-root').locator('h1, h2, h3, h4, h5, p, span, b').first(),
  ).toBeVisible()
}

test.describe('Typography stories screenshots', () => {
  for (const storyId of TYPOGRAPHY_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
