i:
	bun i

dev:
	bun run dev

test:
	bun run test

lint:
	bun run lint

build:
	bun run build

pre:
	npm run prepack
	
pub:
	bun run publish-packages

reset:
	rm -rf node_modules && make i
