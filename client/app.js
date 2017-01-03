const app = 'boilerplate-ng';
angular
  .module(app, ['ui.router'])
  .config(config);

function config(ngMaterial, $stateProvider, $mdThemingProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('indigo');

}
config.$inject = ['ngMaterial', '$stateProvider', '$mdThemingProvider'];
