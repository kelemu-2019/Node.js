const fs = require('fs');
var colors = require('colors');
const todoList = 'todoList.json';

const readTodoFile = todoListFileName => {
  try {
    return JSON.parse(fs.readFileSync(todoListFileName));
  } catch (e) {
    return [];
  }
};

let writeTodoFile = (todoListFileName, content) => {
  try {
    fs.writeFileSync(todoListFileName, JSON.stringify(content));
  } catch (e) {
    console.log(e);
  }
};

const add = task => {
  let newTodoList = readTodoFile(todoList);
  let index = newTodoList.findIndex(x => x.task === task);
  if (index === -1) {
    newTodoList.push({ task });
    writeTodoFile(todoList, newTodoList);
    console.log('The list is added');
  } else console.log('The list is exist, tray add other list\n');
};

const remove = task => {
  let newTodoList = readTodoFile(todoList);
  newTodoList.forEach(function(element, i) {
    if (task - 1 === i) {
      console.log(element.task + '  Will be deleted from the list '.green);
      newTodoList.splice(i, 1);
      console.log(element.task + ' is deleted \n'.red);
    }
  });
  writeTodoFile(todoList, newTodoList);
};

const update = (index, UpdateText) => {
  let newTodoList = readTodoFile(todoList);
  newTodoList.forEach(function(element, i) {
    if (index - 1 === i) {
      let oldTodo = element.task;
      element.task = UpdateText;
      console.log('\n' + oldTodo + ' ---> is  updated by----> ' + UpdateText + ''.Green);
    }
  });
  writeTodoFile(todoList, newTodoList);
};

const reset = () => {
  let newTodoList = readTodoFile(todoList);
  if (newTodoList.length === 0) {
    console.log('The lists is empty ');
  } else {
    newTodoList.forEach(function(element, i) {
      newTodoList.splice(i);
      console.log('\n All lists are Deleted'.red);
    });
    writeTodoFile(todoList, newTodoList);
  }
};

const list = () => {
  let newTodoList = readTodoFile(todoList);
  if (newTodoList.length === 0) {
    console.log('The lists is empty ');
  } else {
    console.log('\n      ' + '######## To do lists ########\n'.magenta);
    newTodoList.forEach(function(element, i) {
      console.log('             ' + (i + 1) + '--------' + JSON.stringify(element.task));
    });
  }
};

module.exports = {
  add,
  remove,
  update,
  reset,
  list,
};
