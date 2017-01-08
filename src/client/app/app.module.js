(function () {
  'use strict';

  angular.module('app', [
      'app.core',

      /*
       * Feature areas

      'app.avengers',
      'app.dashboard',
      'app.layout' */
    ])
    .config(_config)
    .controller('appCtrl', appCtrl)


  function _config($stateProvider) {
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
  };
  _config.$inject = ['$stateProvider'];

  function appCtrl($mdSidenav) {
    let vm = this;

    vm.menus = [
    {
      label: 'Cadastro',
      active: true,
      itens: [],
      path: '/cadastros',
      itens: [{
        label: 'Clientes',
        active: true,
        itens: [],
        path: '/clientes',
        itens: [{
          label: 'Clientes Ativos',
          active: true,
          itens: [],
          path: '/clientesAtivos'
        }, {
          label: 'Clientes Inadimplentes',
          active: true,
          itens: [],
          path: '/clientesInadimplentes'
        }]
      }, {
        label: 'Endereços',
        active: true,
        itens: [],
        path: '/enderecos'
      }]
    },
    {
      label: 'Atividades',
      itens: [{
        label: 'Venda',
        active: true,
        itens: [],
        path: 'atividades',
        itens: [{
          label: 'Orçamentos',
          active: true,
          itens: [],
          path: '/orcamentos'
        }, {
          label: 'Vendas',
          active: true,
          itens: [],
          path: '/vendas'
        }]
      }, {
        label: 'Compra',
        active: true,
        itens: [],
        path: '/compras'
      }]
    }];


    vm.showMobileMainHeader = true;
    vm.openSideNavPanel = function () {
      $mdSidenav('left').open();
    };
    vm.closeSideNavPanel = function () {
      $mdSidenav('left').close();
    };
  };
  appCtrl.$inject = ['$mdSidenav'];

})();
