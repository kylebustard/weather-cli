const program = require('commander');
const { fetchNow, weatherForecast } = require('./commands');

program
  .version('0.0.1')
  .description('command line weather app')

program
  .command('now <city')
  .alias('n')
  .description('See the current weather in the specified city')
  .action(city => fetchNow(city));

program
  .command('forecast <city>')
  .alias('f')
  .description('See a weather forecast of a specified city')
  .action(city => weatherForecast(city));

program.parse(process.argv);
