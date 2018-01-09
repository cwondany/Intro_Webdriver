CMD: 

webdriver-manager start --standalone



Hub start
:
java -jar selenium-server-standalone-3.8.1.jar -role hub

Mochawesome
mocha test --reporter mochawesome --reporter-options autoOpen=true
