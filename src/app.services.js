import angular from 'angular';

import ConfigService from './service/config.service';
import UserService from './service/user.service';
import IoService from './service/io.service';
import DashboardService from './service/dashboard.service';
import WidgetService from './service/widget.service';

const moduleName = 'app.services';

angular
    .module(moduleName, [])
    .factory('configService', ConfigService.factory)
    .factory('userService', UserService.factory)
    .factory('ioService', IoService.factory)
    .factory('dashboardService', DashboardService.factory)
    .factory('widgetService', WidgetService.factory);

export default moduleName;