import page from 'page';

page('/login', () => {
  import(/* webpackChunkName: "login" */ './Login').then(({ Login }) => {
    new Login();
  });
});

page({
  click: false,
});
