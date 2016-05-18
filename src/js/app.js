(function () {
   'use strict';

   var VineWidget = CoreLibrary.Component.subclass({
      defaultArgs: {
         'vine': {
            'title': 'FC Barcelona',
            'href': 'https://vine.co/v/i1YL03VM0a7'
         }
      },

      constructor () {
         CoreLibrary.Component.apply(this, arguments);
      },

      init () {
         this.scope.href = this.scope.args.vine.href + '/embed/simple';
         var js = document.createElement('script');
         js.type = 'text/javascript';
         js.async = true;
         js.src = 'https://platform.vine.co/static/scripts/embed.js';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(js, s);
      }
   });

   var vineWidget = new VineWidget({
      rootElement: 'html'
   });
})();
