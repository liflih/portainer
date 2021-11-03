import angular from 'angular';

import { HttpRequestHelperAngular } from './http-request.helper';

export default angular.module('portainer.app.services', []).factory('HttpRequestHelper', HttpRequestHelperAngular).name;
