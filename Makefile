install: #установка 
	npm ci

brain-games: # запуск Brain Games
	node bin/brain-games.js

publish: #отладка публикации пакета
	npm publish --dry-run
	
lint: # запуск линтера
	npx eslint .