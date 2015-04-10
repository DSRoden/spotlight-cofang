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
    $scope.views = [{color: 'gray', image: null}, {color: 'white', image: null}, {color: 'gray', image: 'https://placekitten.com/g/300/400'}, {color: 'white', image: null}, {color: 'gray', image:'https://placekitten.com/g/200/300'}, {color: 'white', image: 'https://placekitten.com/g/500/300'}, {color: 'gray', image: null}, {color: 'white', image: null}, {color: 'gray', image:'https://placekitten.com/g/200/300'}, {color: 'white', image: 'https://placekitten.com/g/200/300'}];
    $scope.archiveViews = [{name: 'james', date: 'May 1, 2015'}, {name: 'jane', date: 'April 30, 2015'}, {name: 'bob', date: 'April 29, 2015'}, {name: 'sally', date: 'April 28, 2015'}, {name: 'james', date: 'April 27, 2015'}, {name: 'jane', date: 'April 26, 2015'}, {name: 'bob', date: 'April 25, 2015'}, {name: 'sally', date: 'April 24, 2015'},  {name: 'bob', date: 'April 24, 2015'}, {name: 'sally', date: 'April 23, 2015'},  {name: 'bob', date: 'April 24, 2015'}, {name: 'sally', date: 'April 24, 2015'}, {name: '', date: ''}];
    $scope.dayEvents = [{color: 'gray', image: null}, {color: 'white', image: null}, {color: 'gray', image: 'https://placekitten.com/g/300/400'}, {color: 'white', image: null}, {color: 'gray', image:'https://placekitten.com/g/200/300'}, {color: 'white', image: 'https://placekitten.com/g/500/300'}, {color: 'gray', image: null}, {color: 'white', image: null}, {color: 'gray', image:'https://placekitten.com/g/200/300'}, {color: 'white', image: 'https://placekitten.com/g/200/300'}];



    //making ids for example archived days
    $scope.makeIdsForExample = function(){
      for(var i = 0; i < $scope.archiveViews.length; i++){
        $scope.archiveViews[i].id = i;
      }
    };
    $scope.makeIdsForExample();


    //helper function to add a color property archiveViews
    var _colors = ['#FE4365', '#83AF9B', '#FC9D9A', '#F9CDAD', '#C8C8A9'];
    function addColorProperty(){
      for(var i = 0; i < $scope.archiveViews.length; i++){
        $scope.archiveViews[i].color = _.sample(_colors);
      }
    }
    addColorProperty();

    //helper function to calculate size for main spotlight scroll
    $scope.mainScrollHeight = 100;
    function measureHeightForScroll(){
      for(var i = 0; i < $scope.views.length; i++){
        if($scope.views[i].image && $scope.views[i].color){
          $scope.mainScrollHeight += 450;
        } else if($scope.views[i].image === null && $scope.views[i].color){
          $scope.mainScrollHeight += 150;
        } else {
          return;
        }
      }
      console.log($scope.mainScrollHeight);
    }

    measureHeightForScroll();

    //helper function to calculate size for archived day scroll
    $scope.dayScrollHeight = 100;
    function measureHeightForDayScroll(){
      for(var i = 0; i < $scope.dayEvents.length; i++){
        if($scope.dayEvents[i].image && $scope.dayEvents[i].color){
          $scope.dayScrollHeight += 450;
        } else if($scope.dayEvents[i].image === null && $scope.dayEvents[i].color){
          $scope.dayScrollHeight += 150;
        } else {
          return;
        }
      }
      console.log($scope.dayScrollHeight);
    }

    measureHeightForDayScroll();

    //  //helper function to calculate size for archive scroll
    // $scope.archiveScrollHeight = 100;
    // function measureHeightForArchiveScroll(){
    //   for(var i = 0; i < $scope.archiveViews.length; i++){
    //       $scope.archiveScrollHeight += 100;
    //   }
    //   console.log($scope.archiveScrollHeight);
    // }

    // measureHeightForArchiveScroll();



    //$scope.getViewsHeight();
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
    // $scope.getViewsHeight = function(){
    //   return $scope.views.length * 600;
    // };

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
        clipSize: 500
      }
    };

    $scope.testHeight = 600;

    // $timeout(function(){
    //   $famous.find('#main-scrollview')[0].renderNode.sync.on('start', function(event){
    //     var test = angular.element(document.querySelector('#main-view'));
    //     $scope.testHeight = test[0].clientHeight;
    //     console.log('test object', test);
    //     console.log($scope.testHeight);
    //   });
    // }, 1000);

    // $scope.getTestHeight = function(){
    //   return $scope.testHeight;
    // };

    //this is the section enabling spotlight scrolling with navbar and icon animation
    var scrollView;
    $scope.scrollViewHandler = new EventHandler();
    $timeout(function(){
      scrollView = $famous.find('#main-scrollview')[0].renderNode;
      $scope.scrollViewHandler = scrollView.sync;
       $scope.scrollViewHandler.on('start', function(event){
          //console.log('start', event);
          // console.log('size', scrollView.getSize());
          // console.log('start event position', scrollView.getPosition());
          // console.log('start event velocity', scrollView.getVelocity());
        });
       $scope.scrollViewHandler.on('end', function(event){
          // console.log('end event', event);
          // console.log('end event position', scrollView.getPosition());
          // console.log('end event velocity', scrollView.getVelocity());
          // console.log('get current index', scrollView.getCurrentIndex());
          // console.log('size', scrollView.getSize());
          // console.log('get position', scrollView.getPosition());
          // console.log('get absolute position', scrollView.getAbsolutePosition());

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
