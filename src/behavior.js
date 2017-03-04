'use strict'

import { mapObjIndexed, filter, pipe, isEmpty } from 'ramda';

/**
* StorageController
*/
class StorageController {

	/**
	* Put data into localStorage
	* @param {Object} data - object with data
	*/
	static put (data) {
		localStorage.setItem('list', JSON.stringify(data));
	}

	/**
	* Get data from localStorage if exists
	* @return {Object}
	*/
	static get () {
		return 'list' in localStorage ? JSON.parse(localStorage.list) : [];
	}
}

/**
* Wrapper for user which doing validation and create user
*/
class User {

	/**
	* Constructor
	* @param {Object} $scope - Object of current controller scope
	*/
	constructor ($scope) {

		this.first = $scope.first;
		this.last = $scope.last;
		this.username = $scope.username;
	}

	/**
	* Validator
	* @return {Promise}
	*/
	validate () {

		let __validators = this.userValidators;

		let errors = pipe(
			mapObjIndexed((index, field, obj) => {

				let func = __validators[field];

				return !func(obj[field] || '');
			}
		), filter(n => n)
		)(this);

		return new Promise((resolve, reject) => {

			if(isEmpty(errors))
				resolve();
			else
				reject(errors);
		})
	}

	/**
	* validator for each user`s fields
	* @return {Object}
	*/
	get userValidators () {

		return {
			first: n => n !== '',
			last: n => n !== '',
			username: n => n.length >= 3
		}
	}

	/**
	* Create user
	* @param {Array} list - Link to array of users
	* @return {Promise}
	*/
	create (list) {

		return this.validate().then(() => {

			list.push(this);

			StorageController.put(list);
		})
	}
}

export {

	StorageController,
	User
};