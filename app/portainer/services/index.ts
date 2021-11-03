import angular from 'angular';

import { ModalServiceAngular } from './modal.service';

export default angular.module('portainer.app.services', []).factory('ModalService', ModalServiceAngular).name;
