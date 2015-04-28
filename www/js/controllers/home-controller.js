 /*jshint camelcase: false */
 /* global moment */

(function(){
  'use strict';

  angular.module('spotlight-famous')
  .controller('HomeCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', function($scope, $timeout, $location, $famous, $timeline){
    //initialize spotlight about
    $scope.spotlight = {};

    //initializing menu icon
    $scope.menuIcon = 'img/menu-ellipses-icon.png';

    $scope.tapEvent = function($event){
      console.log('tap event');
    };

    //like event
    $scope.like = function(post){
      post.likes += 1;
    };

    //initialize user
    $scope.user = {};
    $scope.userNotSignedIn = true;
    if($scope.userNotSignedIn){
      $scope.login = true;
    }

    $scope.showLogin = function(){
      $scope.register = false;
      $scope.about = false;
      $scope.login = true;
      $scope.registerTransparency.set([0], {duration: 300});
      $scope.loginTransparency.set([1], {duration: 300});

    };

    $scope.showRegister = function(){
      $scope.login = false;
      $scope.about = false;
      $scope.register = true;
      $scope.loginTransparency.set([0], {duration: 300});
      $scope.registerTransparency.set([1], {duration: 300});
    };

    $scope.showAboutOne = function(e){
      console.log('e', e);
      e.stopPropagation();
      $scope.login = false;
      $scope.register = false;
      $scope.about = true;
      $scope.loginTransparency.set([0], {duration: 300});
      $scope.registerTransparency.set([0], {duration: 300});
      $scope.aboutTransparency.set([1], {duration: 300});
    };

    $scope.closeAboutOne = function(){
      $scope.login = true;
      $scope.register = false;
      $scope.about = false;
      $scope.loginTransparency.set([1], {duration: 300});
      $scope.registerTransparency.set([0], {duration: 300});
      $scope.aboutTransparency.set([0], {duration: 300});
    };
    //initialize message
    $scope.post = {};

    //enable moment
    $scope.moment = moment;

    //confirmation dialog
    $scope.confirmation = {};
    $scope.confirmation.text = 'end your time in the Spotlight';

    //winner avatar url
    $scope.winner = {};
    $scope.winner.avatar_url = 'http://fillmurray.com/300/400';
    $scope.winner.bio = 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.';

    //add Image url
    $scope.addImageUrl = 'http://fillmurray.com/300/400';
    $scope.addImageHeight = function(){
        var imageHeight;
      if(window.innerHeight < 500){
        imageHeight = window.innerHeight/4;
        return imageHeight + 'px';
      } else {
        imageHeight = window.innerHeight/3;
        return imageHeight + 'px';
      }
    };

    // textarea height
    $scope.textareaHeight = function(){
      var textareaHeight = window.innerHeight/3.5;
      return textareaHeight + 'px';
    };

    //input height
    $scope.inputHeight = function(){
      var inputHeight = window.innerHeight/13;
      return inputHeight + 'px';
    };

    $scope.bioHeight = function(){
      var bioHeight = window.innerHeight/6;
      return bioHeight + 'px';
    };

    $scope.accountContentHeight = function(){
      var accountContentHeight = window.innerHeight - 300;
      return accountContentHeight + 'px';
    };

    //checking if user is in the spotlight
    $scope.userIsInTheSpotlight = true;

    //spotlight avatar
    $scope.avatar = 'http://fillmurray.com/200/400';

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
      //spotlight post box
    var windowInnerHeight = window.innerHeight,
    // windowMiddleWidth = window.innerWidth/2,
    // negativeWindowWidth = -window.innerWidth,
    windowWidth = window.innerWidth;
    $scope.boxTransitionableSpotlightPost = new Transitionable([0, windowInnerHeight, 0]);
    $scope.postboxSize = new Transitionable([windowWidth,windowInnerHeight]);
    $scope.postboxTransparency = new Transitionable(1);
      //spotlight account box
    $scope.boxTransitionableSpotlightAccount = new Transitionable([0, windowInnerHeight, 0]);
    $scope.accountBoxSize = new Transitionable([windowWidth, windowInnerHeight]);
    $scope.accountBoxTransparency = new Transitionable(1);
      //winner info box
    $scope.boxTransitionableWinnerInfo = new Transitionable([0, windowInnerHeight, 0]);
    $scope.winnerInfoBoxSize = new Transitionable([windowWidth, windowInnerHeight]);
    $scope.winnerInfoBoxTransparency = new Transitionable(1);
      //confirmaiton box
    $scope.boxTransitionableConfirmation = new Transitionable([0, windowInnerHeight, 0]);
    $scope.confirmationBoxSize = new Transitionable([windowWidth, windowInnerHeight]);
    $scope.confirmationBoxTransparency = new Transitionable(1);
      //registration box
    $scope.boxTransitionableRegistration = new Transitionable([0, 0, 0]);
    $scope.registrationBoxSize = new Transitionable([windowWidth, windowInnerHeight]);
    $scope.registrationBoxTransparency = new Transitionable(1);
      //reigstration transparencies
    $scope.loginTransparency = new Transitionable(1);
    $scope.registerTransparency = new Transitionable(0);
    $scope.aboutTransparency = new Transitionable(0);
      //about one
    $scope.boxTransitionableAboutOne = new Transitionable([0, windowInnerHeight, 0]);
    $scope.aboutOneBoxSize = new Transitionable([windowWidth, windowInnerHeight]);
    $scope.aboutOneBoxTransparency = new Transitionable(1);
      //comments
    $scope.boxTransitionableComments = new Transitionable([0, windowInnerHeight, 0]);
    $scope.commentsBoxSize = new Transitionable([windowWidth, windowInnerHeight]);
    $scope.commentsBoxTransparency = new Transitionable(1);


    //flipping to view session or account page
    $scope.flipIt = function(){
      console.log('flipping');
       $famous.find('fa-flipper')[0].flip();
    };

    //example for fa-grid-layout

    $scope.myGridLayoutOptions = {
       dimensions: [1,3] // specifies number of columns and rows
    };
    // $scope.myGridLayoutOptions = {
    //    dimensions: [1,1] // specifies number of columns and rows
    // };

    // $scope.grids = [{
    //                   content: 'Hello',
    //                   bgColor: 'rgb(240, 238, 233)'
    //                 },
    //                 {
    //                   bgColor: 'rgb(240, 238, 233)'
    //                 }];

    //example arrays for views
    $scope.posts = [
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '2015-04-15 12:33:29.706269', likes: 2, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: 'http://fillmurray.com/300/400', created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: null, image_url:'http://fillmurray.com/200/400', created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: null, image_url: 'http://fillmurray.com/500/300', created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: null, image_url:'http://fillmurray.com/300/300', created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: 'http://fillmurray.com/200/300', created_at: '2015-04-15 12:33:29.706269', likes: 400, comments: 2000}];

    $scope.archivedDays = [
                            {name: 'james', date: '2015-04-11 15:33:29.706269'},
                            {name: 'jane', date: '2015-04-11 15:33:29.706269'},
                            {name: 'bob', date: '2015-04-11 15:33:29.7062695'},
                            {name: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {name: 'james', date: '2015-04-11 15:33:29.706269'},
                            {name: 'jane', date: '2015-04-11 15:33:29.706269'},
                            {name: 'bob', date: '2015-04-11 15:33:29.706269'},
                            {name: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {name: 'bob', date: '2015-04-11 15:33:29.706269'},
                            {name: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {name: 'bob', date: '2015-04-11 15:33:29.706269'},
                            {name: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {name: '', date: null}];

    $scope.comments = [
                            {text: 'james', date: '2015-04-11 15:33:29.706269'},
                            {text: 'jane', date: '2015-04-11 15:33:29.706269'},
                            {text: 'bob', date: '2015-04-11 15:33:29.7062695'},
                            {text: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {text: 'james', date: '2015-04-11 15:33:29.706269'},
                            {text: 'jane', date: '2015-04-11 15:33:29.706269'},
                            {text: 'bob', date: '2015-04-11 15:33:29.706269'},
                            {text: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {text: 'bob', date: '2015-04-11 15:33:29.706269'},
                            {text: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {text: 'bob', date: '2015-04-11 15:33:29.706269'},
                            {text: 'sally', date: '2015-04-11 15:33:29.706269'},
                            {text: '', date: null}];

    $scope.archivedDayPosts = [
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '1999-01-08 04:05:06', likes: 2, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: 'http://fillmurray.com/300/400', created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: null, image_url:'http://fillmurray.com/200/400', created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: null, image_url: 'http://fillmurray.com/500/300', created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: null, created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: null, image_url:'http://fillmurray.com/300/300', created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000},
                    {text: 'This is a Spotlight text update that contains a max 160 characters. Users can: share quotes, ideas, questions, shout outs, etc. Tell your story, make it count.', image_url: 'http://fillmurray.com/200/300', created_at: '1999-01-08 04:05:06', likes: 400, comments: 2000}];



    //making ids for example archived days
    $scope.makeIdsForExample = function(){
      for(var i = 0; i < $scope.archivedDays.length; i++){
        $scope.archivedDays[i].id = i;
      }
    };
    $scope.makeIdsForExample();

    //helper function to add a color property archiveViews
    var _colors = ['#FE4365', '#83AF9B', '#FC9D9A', '#F9CDAD', '#C8C8A9'];
    function addColorProperty(){
      for(var i = 0; i < $scope.archivedDays.length; i++){
        $scope.archivedDays[i].color = _.sample(_colors);
      }
    }
    addColorProperty();

    //helper function to calculate size for main spotlight scroll
    $scope.mainScrollHeight = 100;
    function measureHeightForScroll(){
      for(var i = 0; i < $scope.posts.length; i++){
        if($scope.posts[i].image_url && $scope.posts[i].text){
          $scope.mainScrollHeight += 500;
        } else if($scope.posts[i].image_url === null && $scope.posts[i].text){
          $scope.mainScrollHeight += 200;
        } else if ($scope.posts[i].image_url && $scope.posts[i].text === null){
          $scope.mainScrollHeight += 300;
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
      for(var i = 0; i < $scope.archivedDayPosts.length; i++){
        if($scope.archivedDayPosts[i].image_url && $scope.archivedDayPosts[i].text){
          $scope.dayScrollHeight += 500;
        } else if($scope.archivedDayPosts[i].image_url === null && $scope.archivedDayPosts[i].text){
          $scope.dayScrollHeight += 200;
        } else if ($scope.archivedDayPosts[i].image_url && $scope.archivedDayPosts[i].text === null){
          $scope.dayScrollHeight += 300;
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
    $scope.eventHandlerA = new EventHandler();
    $scope.eventHandlerB = new EventHandler();
    $scope.eventHandlerA.pipe($scope.eventHandlerB);
    $scope.commentsScrollHandler = new EventHandler();


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

      //this is the section enabling spotlight scrolling with navbar and icon animation
    var scrollCommentsView;
    $scope.scrollCommentsViewHandler = new EventHandler();
    $timeout(function(){
      scrollCommentsView = $famous.find('#comments-scrollview')[0].renderNode;
      $scope.scrollCommentsViewHandler = scrollCommentsView.sync;
       $scope.scrollCommentsViewHandler.on('start', function(event){
          //console.log('start', event);
          // console.log('size', scrollView.getSize());
          // console.log('start event position', scrollView.getPosition());
          // console.log('start event velocity', scrollView.getVelocity());
        });
       $scope.scrollCommentsViewHandler.on('end', function(event){
          // console.log('end event', event);
          // console.log('end event position', scrollView.getPosition());
          // console.log('end event velocity', scrollView.getVelocity());
          // console.log('get current index', scrollView.getCurrentIndex());
          // console.log('size', scrollView.getSize());
          // console.log('get position', scrollView.getPosition());
          // console.log('get absolute position', scrollView.getAbsolutePosition());

          var windowHeight = window.innerHeight;
          if(scrollCommentsView.getVelocity() > 0){
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

      //open post box animation
    $scope.openPostBox = function($event){
      console.log('post box');
      var pageWidth = $scope.getPageWidth(),
       pageHeight = $scope.getPageHeight();
      $scope.boxTransitionableSpotlightPost.set([0, 50, 0], {duration: 300, curve: Easing.easeIn});
      $scope.postboxSize.set([pageWidth, pageHeight], {duration: 300, curve: Easing.easeIn});
      $scope.postboxTransparency.set([1], {duration: 300});
    };

    $scope.closePostbox = function(){
      $scope.boxTransitionableSpotlightPost.set([0, windowInnerHeight, 0], {duration: 300, curve: Easing.easeIn});
      $scope.postboxSize.set([windowWidth,windowInnerHeight], {duration: 300, curve: Easing.easeIn});
      $scope.postboxTransparency.set([0], {duration: 300});
    };

    $scope.showAccount = function(){
      var pageWidth = $scope.getPageWidth(),
       pageHeight = $scope.getPageHeight();
      $scope.boxTransitionableSpotlightAccount.set([0, 50, 0], {duration: 300, curve: Easing.easeIn});
      $scope.accountBoxSize.set([pageWidth, pageHeight], {duration: 300, curve: Easing.easeIn});
      $scope.accountBoxTransparency.set([1], {duration: 300});
    };

    $scope.closeAccountPage = function(){
      $scope.boxTransitionableSpotlightAccount.set([0, windowInnerHeight, 0], {duration: 300, curve: Easing.easeIn});
      $scope.accountBoxSize.set([windowWidth,windowInnerHeight], {duration: 300, curve: Easing.easeIn});
      $scope.accountBoxTransparency.set([0], {duration: 300});
    };

    $scope.showWinnerInfo = function(){
       var pageWidth = $scope.getPageWidth(),
       pageHeight = $scope.getPageHeight();
      $scope.boxTransitionableWinnerInfo.set([0, 50, 0], {duration: 300, curve: Easing.easeIn});
      $scope.winnerInfoBoxSize.set([pageWidth, pageHeight], {duration: 300, curve: Easing.easeIn});
      $scope.winnerInfoBoxTransparency.set([1], {duration: 300});
    };

    $scope.closeWinnerInfo = function(){
      $scope.boxTransitionableWinnerInfo.set([0, windowInnerHeight, 0], {duration: 300, curve: Easing.easeIn});
      $scope.winnerInfoBoxSize.set([windowWidth,windowInnerHeight], {duration: 300, curve: Easing.easeIn});
      $scope.winnerInfoBoxTransparency.set([1], {duration: 300});
    };

    $scope.showConfirmationDialog = function(){
       var pageWidth = $scope.getPageWidth(),
       pageHeight = $scope.getPageHeight();
      $scope.boxTransitionableConfirmation.set([0, 50, 0], {duration: 300, curve: Easing.easeIn});
      $scope.confirmationBoxSize.set([pageWidth, pageHeight], {duration: 300, curve: Easing.easeIn});
      $scope.confirmationBoxTransparency.set([1], {duration: 300});
    };

    $scope.closeConfirmationDialog = function(){
      $scope.boxTransitionableConfirmation.set([0, windowInnerHeight, 0], {duration: 300, curve: Easing.easeIn});
      $scope.confirmationBoxSize.set([windowWidth,windowInnerHeight], {duration: 300, curve: Easing.easeIn});
      $scope.confirmationBoxTransparency.set([1], {duration: 300});
    };

    $scope.openCommentsBox = function(){
      $scope.eventHandlerA.emit('myEvent');
    };

    $scope.eventHandlerB.on('myEvent', function(){
      console.log('post box');
      var windowHeight = window.innerHeight;
      $scope.boxTransitionableFooter.set([0, (windowHeight *2), 0], {duration: 300, curve: Easing.easeOut});
      $scope.opacityTrans.set([0], {duration: 300});
      var pageWidth = $scope.getPageWidth(),
      pageHeight = $scope.getPageHeight();
      $scope.boxTransitionableComments.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
      $scope.commentsBoxSize.set([pageWidth, pageHeight], {duration: 300, curve: Easing.easeIn});
      $scope.commentsBoxTransparency.set([1], {duration: 300});
    });

  }]);
})();
