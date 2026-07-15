import { test, expect, type Page } from '@playwright/test'

const SKELETON_STORIES = [
  'default',
  'with-button',
  'color',
  'custom-color',
  'variant',
  'set-size',
  'animated',
  'animations',
  'custom',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-skeleton--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root').locator('*').first()).toBeVisible()
}

test.describe('Skeleton stories screenshots', () => {
  for (const storyId of SKELETON_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
