(function () {
   'use strict';

   var VineWidget = CoreLibrary.Component.subclass({
      defaultArgs: {
         title: '', // title to show on the widget
         height: 400, // height of the video
         vineUrl: 'https://vine.co/v/i1YL03VM0a7' // url to video
      },

      constructor () {
         CoreLibrary.Component.apply(this, arguments);
      },

      init () {
         document.getElementById('main').style.height = this.scope.args.height + 'px';
         this.scope.title = this.scope.args.title;
         this.scope.href = this.scope.args.vineUrl + '/embed/simple';
         var js = document.createElement('script');
         js.type = 'text/javascript';
         js.async = true;
         js.src = 'https://platform.vine.co/static/scripts/embed.js';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(js, s);
         CoreLibrary.widgetModule.adaptWidgetHeight();
      }
   });

   var vineWidget = new VineWidget({
      rootElement: 'html'
   });
})();
