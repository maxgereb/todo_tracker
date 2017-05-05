Router.route('/', function () {
  this.render('index');
});

Router.route('/index', function () {
  this.render('index');
  document.getElementById('nav--new').setAttribute('class', '');
  document.getElementById('nav--index').setAttribute('class', 'active');
  document.getElementById('nav--tutorial').setAttribute('class', '');
});

Router.route('/new', function () {
  this.render('new');
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
