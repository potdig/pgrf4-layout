build:
	docker compose build --build-arg LAYOUTS_NAME=pgrf4-layout
dev:
	docker compose --profile dev up -d
prod:
	docker compose --profile prod up -d