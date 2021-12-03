const Todo = require("../models/Todo");

const getIndex = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) console.log(err);
    console.log(todos);
    res.render("index", {
      todos: todos,
    });
  });
};

const postIndex = (req, res) => {
  console.log(`req.body ?`, req.body);
  const newTodo = new Todo({
    text: req.body.text,
  });
  console.log("new todos?", newTodo);
  newTodo.save((err) => {
    if (err) console.log(err);
  });
};

const deleteIndex = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id, (err) => {
    if (err) console.log(err);
  });
};

const getEdit = (req, res) => {
  const { id } = req.params;
  Todo.findById(id, (err, todo) => {
    if (err) console.log(err);

    res.render("edit", {
      todo: todo,
    });
  });
};

const editTodo = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndUpdate(id, { text: req.body.text }, (err) => {
    if (err) console.log(err);
  });
};

module.exports = {
  getIndex: getIndex,
  postIndex: postIndex,
  deleteIndex: deleteIndex,
  getEdit: getEdit,
  editTodo: editTodo,
};
