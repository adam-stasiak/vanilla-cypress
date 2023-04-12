This repository shows an example of cypress usage.

## setup
'''npm i'''
'''cypress install''' - if does not work please reach directly from node_modules
''''''cypress run OR cypress open OR npm test'''


By default it hits baseUrl https://todomvc.com/examples/vanillajs/.
By default it runs on Full HD resolution. You can adjust this by passing parameter to run command:
'''cypress open --config '{"e2e":{"viewportHeight": 2100}}' '''