'use strict';

// TODO: Write the homework code in this file
const commands = require('./commands');
const program = require('commander');

program
  .command('add <task>')
  .alias('a')
  .description('Add a new to Do List.')
  .action(task => {
    commands.add(task);
  });

program.parse(process.argv);

program
  .command('list')
  .alias('l')
  .description('Lists the to Do List.')
  .action(() => {
    commands.list();
  });

program.parse(process.argv);

program
  .command('remove <task>')
  .alias('l')
  .description('Remove the task from the to Do List.')
  .action(task => {
    commands.remove(task);
  });

program.parse(process.argv);
