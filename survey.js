const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?:', (name) => {
  rl.question('What\'s an activity you like doing?:', (activity) => {
    rl.question('What do you listen to while doing that?:', (music) => {
      rl.question('Which meal is your favourite :', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?:', (food) => {
          rl.question('Which sport is your absolute favourite?:', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!:', (power) => {
  
  
  console.log(`${name} really enjoys ${activity} while listening to ${music}. ${name}'s favourite meal of the day is ${meal} and ${name}'s fav food for ${meal} is ${food}. ${name}'s favourite sport is ${sport} while their superpower is ${power}`);

  rl.close();
            });
          });
        });
      });
    });
  });
});