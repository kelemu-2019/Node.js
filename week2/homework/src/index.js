'use strict';

const commands = require('./commands');
const program = require('commander');

program
  .option('-a, --add <task>', 'add to the task', commands.add)
  .option('-r, --remove <index>', 'Remove the task from the to Do List', commands.remove)
  .option('-rs, --reset ', 'Remove all task from the to Do List', commands.reset)
  .option('-l, --list', 'Remove the task from the to Do List', commands.list);

program.parse(process.argv);

program
  .command('update <index> [UpdateText]')
  .alias('u')
  .description('update the to do list')
  .action((index, UpdateText) => {
    commands.update(index, UpdateText);
  });

program.parse(process.argv);
