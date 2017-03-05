'use strict'

import { Angular } from 'angular';
import { StorageController, User } from './behavior';

require('./style.css');
require('bootstrap/dist/css/bootstrap.min.css');

var app = angular.module('test', []);

app.service('userList', function () {

	return { items: StorageController.get() };
})

app.controller('list', function ($scope, userList) {

	$scope.list = userList.items;
})

app.controller('userform', function ($scope, userList) {

	$scope.addUser = function () {

		var user = new User($scope);

		user.create(userList.items)
			.then(() => {
				$scope.validation = {};
			})
			.catch((fields) => {
				$scope.validation = fields;
			});
	}
})