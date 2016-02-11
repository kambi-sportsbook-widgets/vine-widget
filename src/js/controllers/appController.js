(function () {

   'use strict';

   (function ( $app ) {
      return $app.controller('appController',
         ['$scope', '$controller', '$http', '$sce', 'kambiAPIService', 'kambiWidgetService',
            function ( $scope, $controller, $http, $sce, kambiAPIService, kambiWidgetService ) {

               angular.extend(this, $controller('widgetCoreController', {
                  '$scope': $scope
               }));

               // Default arguments, these will be overridden by the arguments from the widget api
               $scope.defaultArgs = {
                  'vine': {
                     'title': 'FC Barcelona',
                     'href': 'https://vine.co/v/i1YL03VM0a7'
                  }
               };

               // Setting variables for the width and height
               var kwcard = $('.kw-card'), widgetHeaderHeight = 37;

               $(window).bind('resize', function() {
                  $scope.width = kwcard.width();
                  $scope.setWidgetHeight($scope.width + widgetHeaderHeight);
               });

               // Inject Vine JS
               var initVineJS = function () {
                  var js = document.createElement('script');
                  js.type = 'text/javascript';
                  js.async = true;
                  js.src = 'https://platform.vine.co/static/scripts/embed.js';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(js, s);
               };

               // Call the init method in the coreWidgetController so that we setup everything using our overridden values
               // The init-method returns a promise that resolves when all of the configurations are set, for instance the $scope.args variables
               // so we can call our methods that require parameters from the widget settings after the init method is called
               $scope.init().then(function () {

                  // Build Vine iframe's URL
                  $scope.args.vine.href = $sce.trustAsResourceUrl($scope.args.vine.href + '/embed/simple');

                  // Init Vine script
                  initVineJS();

               });

            }]);
   })(angular.module('vineWidget'));
})($);
