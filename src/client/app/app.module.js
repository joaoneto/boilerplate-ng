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
        path: '/cadastros',
        itens: [
          {
            label: 'Clientes',
            active: true,
            path: '/clientes',
            itens: [{
              label: 'Clientes Ativos',
              active: true,
              path: '/clientesAtivos',
              itens: []
        }, {
              label: 'Clientes Inadimplentes',
              active: true,
              path: '/clientesInadimplentes',
              itens: []
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
          path: '/compras',
          itens: []
      }]
    }];

    vm.setMostrar = (esse) => {
      vm.mostar = esse
    };
    vm.getMostrar = () => vm.mostar;

    vm.cl = (aa) => {
      if (aa.itens && aa.itens.length > 0) {
        if (vm.menuMostrar === aa.label) {
          vm.menuMostrar = ''
          vm.menuEsconder = aa.label
        }
        else {
          vm.menuEsconder = ''
          vm.menuMostrar = aa.label
        }
        vm.route = '';
      }
      else {
        vm.route = aa.path;
        console.log(vm.route);
      }
    }

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
