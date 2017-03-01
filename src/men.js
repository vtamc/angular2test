'use strict'

export class Men {

	constructor ($scope) {

		this.first = $scope.first;
		this.last = $scope.last;
		this.username = $scope.username;
	}

	create (list) {

		list.push(this);
	}
}