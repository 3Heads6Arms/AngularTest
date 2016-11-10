/// <reference path="../typings/index.d.ts" />
'use strict'

angular
    .module('myApp')
    .provider('helloProvider', function () {
        this.$get = function () {
            return function (value) {
                console.log('hello ' + value);
            };
        };
    })
    .service('helloService', function () {
        return function (value) {
            console.log('hello ' + value);
        };
    })
    .factory('helloFactory', function () {
        return function (value){
            console.log('hello ' + value);
        }
    })
    .controller('helloController', function(helloProvider, helloService, helloFactory){
        helloProvider('provider')
        helloService('service')
        helloFactory('factory');
    });