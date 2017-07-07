import angular from 'angular';
import router from 'angular-ui-router';
import materialize from 'angular-materialize';

import services from './app.services';
import components from './app.components';

import ROUTES from './constant/routes';

const moduleName = 'app';

angular
    .module(moduleName, [router, materialize, services, directives, components])
    .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise(ROUTES.default);

        Object
            .keys(ROUTES)
            .filter(route => route !== 'default')
            .forEach(route => $stateProvider.state(route, ROUTES[route]));
    });

export default moduleName;