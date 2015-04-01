(function(){
  'use strict';

  angular.module('spotlight-famous')
  .controller('HomeCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', function($scope, $timeout, $location, $famous, $timeline){
    //animations and eventhandler inits
    var Transitionable = $famous['famous/transitions/Transitionable'],
        Easing = $famous['famous/transitions/Easing'],
        EventHandler = $famous['famous/core/EventHandler'];

    //transitionables
      //spotlight transitionables
    $scope.boxTransitionableHeader = new Transitionable([0, 0, 0]);
    $scope.boxTransitionableFooter = new Transitionable([0, 0, 0]);
    $scope.opacityTrans = new Transitionable(1);
      //archive transitionables
    $scope.boxTransitionableHeader2 = new Transitionable([0, 0, 0]);
    $scope.boxTransitionableFooter2 = new Transitionable([0, 0, 0]);
    $scope.opacityTrans2 = new Transitionable(1);
      //show day transitionables
    $scope.boxTransitionableHeader3 = new Transitionable([0, 0, 0]);
    $scope.boxTransitionableFooter3 = new Transitionable([0, 0, 0]);
    $scope.opacityTrans3 = new Transitionable(1);


    //example for fa-grid-layout
    $scope.myGridLayoutOptions = {
       dimensions: [1,1] // specifies number of columns and rows
    };

    $scope.grids = [{
                      content: 'Hello',
                      bgColor: 'rgb(240, 238, 233)'
                    },
                    {
                      bgColor: 'rgb(240, 238, 233)'
                    }];

    //example arrays for views
    $scope.views = [{color: 'gray', image:'http://placekitten.com/g/200/300'}, {color: 'white', image:'http://placekitten.com/g/200/300'}, {color: 'gray', image: 'http://placekitten.com/g/300/300'}, {color: 'white', image:'http://placekitten.com/g/200/300'},{color: 'gray', image:'http://placekitten.com/g/200/300'}, {color: 'white', image:'http://placekitten.com/g/500/400'}, {color: 'gray', image: 'http://placekitten.com/g/270/390'}, {color: 'white', image:'http://placekitten.com/g/250/330'}];
    $scope.archiveViews = [{color: 'gray', name: 'james'}, {color: 'white', name: 'jane'}, {color: 'gray', name: 'bob'}, {color: 'white', name: 'sally'}, {color: 'gray', name: 'james'}, {color: 'white', name: 'jane'}, {color: 'gray', name: 'bob'}, {color: 'white', name: 'sally'}];
    $scope.dayEvents = [{color: 'gray'}, {color: 'white'}, {color: 'gray'}, {color: 'white'}, {color: 'gray'}, {color: 'white'}, {color: 'gray'}, {color: 'white'}, {color: 'gray'}, {color: 'white'}];

    //making ids for example archived days
    $scope.makeIdsForExample = function(){
      for(var i = 0; i < $scope.archiveViews.length; i++){
        $scope.archiveViews[i].id = i;
      }
    };
    $scope.makeIdsForExample();

    //eventhandlers
    $scope.myEventHandler = new EventHandler();
    $scope.archiveScrollEventHandler = new EventHandler();
    $scope.eventHandler = new EventHandler();
    $scope.dayScrollEventHandler = new EventHandler();


    //functions for getting the window width and height
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
    };

    //this is the option object instantiating page view transitions and constraints
    $scope.options = {
      scrollViewTwo: {
        direction: 0,
        paginated: true
      },
       scrollViewOne: {
        direction: 1,
        paginated: true
      },
       scrollViewThree: {
        direction: 1,
        paginated: true
      },
      container: {
        clipSize: window.innerHeight
      }
    };

    //this is the section enabling spotlight scrolling with navbar and icon animation
    var scrollView;
    $scope.scrollViewHandler = new EventHandler();
    $timeout(function(){
      scrollView = $famous.find('#main-scrollview')[0].renderNode;
      $scope.scrollViewHandler = scrollView.sync;
       $scope.scrollViewHandler.on('start', function(event){
          // console.log('start', event);
          // console.log('start event position', scrollView.getPosition());
          // console.log('start event velocity', scrollView.getVelocity());
        });
       $scope.scrollViewHandler.on('end', function(event){
          // console.log('end event', event);
          // console.log('end event position', scrollView.getPosition());
          // console.log('end event velocity', scrollView.getVelocity());
          var windowHeight = window.innerHeight;
          if(scrollView.getVelocity() > 0){
            //console.log('turn header off');
            //$scope.spotlightHeaderOn= false;
            $scope.boxTransitionableHeader.set([0, -40, 0], {duration: 300, curve: Easing.easeOut});
            $scope.boxTransitionableFooter.set([0, windowHeight, 0], {duration: 300, curve: Easing.easeOut});
            $scope.opacityTrans.set([0], {duration: 300});
            $scope.$digest();
          } else {
            $scope.boxTransitionableHeader.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
            $scope.boxTransitionableFooter.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
            $scope.opacityTrans.set([1], {duration: 300});
            $scope.$digest();
          }
        });
    }, 1000);


    //this is the section enabling archive scrolling with navbar and icon animation
    var archiveScrollView;
    $scope.scrollViewHandlerArchive = new EventHandler();
    $timeout(function(){
      archiveScrollView = $famous.find('#archive-scrollview')[0].renderNode;
      $scope.scrollViewHandlerArchive = archiveScrollView.sync;
       $scope.scrollViewHandlerArchive.on('start', function(event){
          // console.log('start', event);
          // console.log('start event position', scrollView.getPosition());
          // console.log('start event velocity', scrollView.getVelocity());
        });
       $scope.scrollViewHandlerArchive.on('end', function(event){
          // console.log('end event', event);
          // console.log('end event position', scrollView.getPosition());
          // console.log('end event velocity', scrollView.getVelocity());
          var archiveWindowHeight = window.innerHeight;
          if(archiveScrollView.getVelocity() > 0){
            //console.log('turn header off');
            $scope.boxTransitionableHeader2.set([0, -40, 0], {duration: 300, curve: Easing.easeOut});
            $scope.boxTransitionableFooter2.set([0, archiveWindowHeight, 0], {duration: 300, curve: Easing.easeOut});
            $scope.opacityTrans2.set([0], {duration: 300});
            $scope.$digest();
          } else{
            $scope.boxTransitionableHeader2.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
            $scope.boxTransitionableFooter2.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
            $scope.opacityTrans2.set([1], {duration: 300});
            $scope.$digest();
          }
        });
    }, 1000);

  //this is the section enabling show day scrolling with navbar and icon animation
      var dayScrollView;
      $scope.scrollViewHandlerDay = new EventHandler();
      $timeout(function(){
        dayScrollView = $famous.find('#day-scrollview')[0].renderNode;
        $scope.scrollViewHandlerDay = dayScrollView.sync;
         $scope.scrollViewHandlerDay.on('start', function(event){
            // console.log('start', event);
            // console.log('start event position', scrollView.getPosition());
            // console.log('start event velocity', scrollView.getVelocity());
          });
         $scope.scrollViewHandlerDay.on('end', function(event){
            // console.log('end event', event);
            // console.log('end event position', scrollView.getPosition());
            // console.log('end event velocity', scrollView.getVelocity());
            var dayWindowHeight = window.innerHeight;
            if(dayScrollView.getVelocity() > 0){
              //console.log('turn header off');
              $scope.boxTransitionableHeader3.set([0, -40, 0], {duration: 300, curve: Easing.easeOut});
              $scope.boxTransitionableFooter3.set([0, dayWindowHeight, 0], {duration: 300, curve: Easing.easeOut});
              $scope.opacityTrans3.set([0], {duration: 300});
              $scope.$digest();
            } else{
              $scope.boxTransitionableHeader3.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
              $scope.boxTransitionableFooter3.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
              $scope.opacityTrans3.set([1], {duration: 300});
              $scope.$digest();
            }
          });
      }, 1000);

    //Switch page function
    $scope.changePageHandler = new EventHandler();
    $scope.switchPage = function(pageToGoTo){
      var pageView = $famous.find('#home')[0].renderNode;
      //console.log(pageView);
      $scope.changePageHandler = pageView.sync;
      //console.log($scope.changePageHandler);
      //var pageToGoTo = (currentPage) ? 0 : 1;
      pageView.goToPage(pageToGoTo);
    };

    //Go to archived day function
    $scope.goToArchivedDay = function(id){
      //make a call to the database to find the day by id and return it's contents
     //switch to show day view
      //console.log(id);
      $scope.switchPage(2);

    };

  }]);
})();
