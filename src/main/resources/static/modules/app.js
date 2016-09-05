angular
    .module('app', ['ngRoute', 'ngCookies', 'ngResource', 'slidingPuzzle', 'ui-notification'])
    .factory('XSRFInterceptor', [ '$cookies', '$log', function ($cookies, $log) {

        var XSRFInterceptor = {

            request: function(config) {
                var token = $cookies.get('XSRF-TOKEN');

                if (token) {
                    config.headers['X-XSRF-TOKEN'] = token;
                    $log.info("X-XSRF-TOKEN: " + token);
                }

                return config;
            }
        };
        return XSRFInterceptor;
    }])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/modules/home/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: '/modules/auth/login.tpl.html',
                controller: 'AuthCtrl'
            })
            .when('/trainer', {
                templateUrl: '/modules/trainer/trainerView.tpl.html',
                controller: 'CreateCourseCtrl'})
            .when('/course/:courseId', {
                templateUrl: '/modules/course/show.tpl.html',
                controller: 'CourseCtrl'
            })
            .when('/create-challenge', {
                templateUrl: '/modules/challenge/create.tpl.html',
                controller: 'ChallengeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $httpProvider.interceptors.push('XSRFInterceptor');
    }])
    .run(['AuthService', function(AuthService){
        AuthService.init();
    }]);
