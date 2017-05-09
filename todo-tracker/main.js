Router.route('/', function () {
  this.render('index');
});

Router.route('/index', function () {
  this.render('index');
  document.getElementById('nav--new').setAttribute('class', '');
  document.getElementById('nav--index').setAttribute('class', 'active');
  document.getElementById('nav--tutorial').setAttribute('class', '');
});

Router.route('/newTodo', function () {
  this.render('newTodo');
  document.getElementById('nav--new').setAttribute('class', 'active');
  document.getElementById('nav--index').setAttribute('class', '');
  document.getElementById('nav--tutorial').setAttribute('class', '');
});

Router.route('/tutorial', function () {
  this.render('tutorial');
  document.getElementById('nav--new').setAttribute('class', '');
  document.getElementById('nav--index').setAttribute('class', '');
  document.getElementById('nav--tutorial').setAttribute('class', 'active');
});

Router.route('/impressum', function () {
  this.render('impressum');
  document.getElementById('nav--new').setAttribute('class', '');
  document.getElementById('nav--index').setAttribute('class', '');
  document.getElementById('nav--tutorial').setAttribute('class', '');
});

Router.route('/edit', function () {
  this.render('edit');
  document.getElementById('nav--new').setAttribute('class', '');
  document.getElementById('nav--index').setAttribute('class', '');
  document.getElementById('nav--tutorial').setAttribute('class', '');
});

TodoList = new Mongo.Collection('todos');

if (Meteor.isClient) {
  Template.index.helpers({
    'todo': function(){
        return TodoList.find();
    }
  });


  Template.newTodo.events({
      'submit form': function(){
          // event.preventDefault();
          var todoTitleVar = event.target.todoTitle.value;
          // console.log(todoTitleVar)

          var todoDeadlineVar = event.target.todoDeadline.value;
          // console.log(todoDeadlineVar);

          var todoDescriptionVar = event.target.todoDescription.value;
          // console.log(todoDescriptionVar);

          TodoList.insert({ title: todoTitleVar, deadline: todoDeadlineVar, progress: 0, description: todoDescriptionVar});
      }
  });

  var todoEditId;
  var todoEditTitle;
  var todoEditDeadline;
  var todoEditProgress;
  var todoEditDescription;

  Template.index.events({
    'click #todoDelete': function() {
        TodoList.remove(this._id);
    },

    'click #todoEdit': function() {
      todoEditId = this._id;
      todoEditTitle = this.title;
      todoEditDeadline = this.deadline;
      todoEditProgress = this.progress;
      todoEditDescription = this.description;
    }
  });

  Template.edit.helpers({
    'editTitle': function() {
      return todoEditTitle;
    },

    'editDeadline': function() {
      return todoEditDeadline;
    },

    'editProgress': function() {
      return todoEditProgress;
    },

    'editDescription': function() {
      return todoEditDescription;
    }
  });

  Template.edit.events({
    'submit form': function(){
      // event.preventDefault();

      var todoTitleVar = event.target.todoTitle.value;
      // console.log(todoTitleVar)

      var todoDeadlineVar = event.target.todoDeadline.value;
      // console.log(todoDeadlineVar);

      var todoProgressVar = event.target.todoProgress.value;
      // console.log(todoDeadlineVar);

      var todoDescriptionVar = event.target.todoDescription.value;
      // console.log(todoDescriptionVar);

      TodoList.update(todoEditId, {title: todoTitleVar, deadline: todoDeadlineVar, progress: todoProgressVar, description: todoDescriptionVar});
    }
  });
}
