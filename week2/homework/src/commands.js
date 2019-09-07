const fs = require('fs');
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
    console.log('File is Written');
  } catch (e) {
    console.log(e);
  }
};

const add = task => {
  let newTodoList = readTodoFile(todoList);
  let index = newTodoList.findIndex(x => x.task === task);
  if (index === -1) {
    newTodoList.push({ task });
  }
  writeTodoFile(todoList, newTodoList);
};

const remove = task => {
  let newTodoList = readTodoFile(todoList);

  const filterTodo = newTodoList.filter(function(task) {
    return newTodoList[task] !== newTodoList;
  });
  writeTodoFile(todoList, filterTodo);
};
const list = () => {
  let newTodoList = readTodoFile(todoList);

  console.log(newTodoList);
};

module.exports = {
  add,
  remove,
  list,
};
