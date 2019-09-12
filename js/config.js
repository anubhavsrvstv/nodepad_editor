myFirstApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/login");
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("/", {
            url: "/login",
            templateUrl: "views/login.html"
        })
        .state("notepad", {
            url: "/notepad",
            templateUrl: "views/notepad.html"
        })
       
});