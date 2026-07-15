NODE ?= node
SYNC_SCRIPT := scripts/sync-icon-exports.mjs

.PHONY: icons icons-generate test-all test-coverage test-e2e
icons icons-generate:
	$(NODE) $(SYNC_SCRIPT)

test-all:
	npm run vitest:unit
	npm run vitest:storybook
	npm run test:e2e

test-coverage:
	npm run coverage

test-e2e:
	npm run test:e2e