'use strict'

import { Angular } from 'angular';
import { Men } from './men';

require('./style.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

var app = angular.module('test', []);

app.controller('list', function ($scope) {

	$scope.list = [];

	$scope.addUser = function () {

		var men = new Men($scope);
		men.create($scope.list);
	}
})