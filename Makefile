install: #dependencies installaion 
	npm ci

brain-games: # Brain Games launch
	node bin/brain-games.js

brain-calc: #Brain Calc launch
	node bin/brain-calc.js

brain-even: #Brain Even launch
	node bin/brain-even.js

brain-gcd: #Brain GCD launch
	node bin/brain-gcd.js

brain-prime: #Brain Prime launch
	node bin/brain-prime.js

brain-progression: #Brain Progression launch
	node bin/brain-progression.js

publish: # debugging package publication
	npm publish --dry-run
	
lint: # linter launch
	npx eslint .