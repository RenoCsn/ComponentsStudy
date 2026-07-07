import { test, expect, type Page } from '@playwright/test'

const BUTTON_STORIES = [
  'default',
  'color',
  'variant',
  'align',
  'disabled',
  'full-width',
  'size',
  'animated',
  'animations',
  'custom',
  'on-click',
] as const

async function visitStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=atoms-button--${storyId}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await expect(page.locator('#storybook-root').getByRole('button').first()).toBeVisible()
}

test.describe('Button stories screenshots', () => {
  for (const storyId of BUTTON_STORIES) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await visitStory(page, storyId)
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}.png`,
      )
    })
  }
})
