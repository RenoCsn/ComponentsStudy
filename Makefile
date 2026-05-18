NODE ?= node
SYNC_SCRIPT := scripts/sync-icon-exports.mjs

.PHONY: icons icons-generate
icons icons-generate:
	$(NODE) $(SYNC_SCRIPT)
