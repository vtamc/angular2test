'use strict'

import { User } from '../src/behavior';

var assert = require('assert');

describe('User validation', function() {

	it('should throw an exception when passed object with empty-string fields', function(done) {
		
		let user = new User({
			first: '',
			last: '',
			username: 'dd'
		});

		user.validate()
			.then(() => {
				done('incorrect validation');
			})
			.catch(() => {
				done();
			})
	});
});

describe('User validation', function() {

	it('should throw an exception when username less than 3', function(done) {
		
		let user = new User({
			first: 'test',
			last: 'test',
			username: 'dd'
		});

		user.validate()
			.then(() => {
				done('incorrect validation');
			})
			.catch(() => {
				done();
			})
	});
});