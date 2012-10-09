'use strict';

/* jasmine specs for services go here */

describe('service', function () {
    beforeEach(module('scumApp.services'));


    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.2');
        }));
    });
});
