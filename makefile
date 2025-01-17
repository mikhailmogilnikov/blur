make i:
	bun i

make dev:
	bun run dev

make test:
	bun run test

make lint:
	bun run lint

make build:
	bun run build

make pre:
	npm run prepack
	
make pub:
	bun run publish-packages

make clean-packages:
	rm -rf node_modules
