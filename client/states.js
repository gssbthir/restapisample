angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.sitedetail', {
        views: {
            app: {
                controller: 'app_sitedetail',
                templateProvider: function (app) {
                    return app.templateProvider('app.sitedetail');
                }
            }
        }
    }).state('app.sitedetails', {
        views: {
            app: {
                controller: 'app_sitedetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.sitedetails');
                }
            }
        }
    });
});