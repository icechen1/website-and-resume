// app.js
var routerApp = angular.module('websiteApp', ['ui.router','angular-timeline','ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'partial-main.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html',
            controller: 'AboutController'
        })
        .state('projects', {
            // we'll get to this in a bit
            url: '/projects',
            templateUrl: 'partial-projects.html',
            controller: 'ProjectController'
        });

});

routerApp.controller('ProjectController', function($scope,$sce) {
    $scope.projects = [{
        name: "Roomi",
        description: "Roomi is a communication hub app for roomates built in 20 hours at UW EngHack W15. It incorporates useful features such as messenging between roomates, spliting bills and fees, shared to-do lists as well as shared events. We envisioned the project to facilitate cohabitation. The project is built using Meteor and AngularJS.<br />Won 2nd place at EngHack W15.",
        url:{
            name:"Webapp",
            url: "https://roomi.meteor.com/"},
        source_url: null,
        type: "web",
        date:"March 2015"
    },
                       {
        name: "CommuniVoice",
        description: "With CommuniVoice, you can reports any kind of problems around the city effortlessly. Just choose a category, take a picture and you are set. We save the location and time and send the information right away to the city. <br/> Won the Yelp best Community hack prize at HackIllinois 2015.",
        url:{
            name:"Webapp",
            url: "http://communivoice.azurewebsites.net/"},
        source_url: null,
        type: "android",
        date:"March 2015"
    }, {
        name: "SpeedRun",
        description: "Won 2nd place software hack at UofTHacks for the SpeedRun Android/Pebble fitness game ",
        url:{
            name:"Landing Page",
            url: "http://yuchenhou.com/speedrun/"},
        source_url: null,
        type: "android",
        date:"January 2015"
    },{
        name: "Solar Watch",
        description: "Get the sunrise and sunset times on your Android Wear watch!",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.sunwatch"},
        source_url: null,
        type: "android",
        date:"December 2014"
    },{
        name: "ScribblerBot",
        description: "School project: Created a crowd controlled robot using Python, Nodejs and a ScribblerBot, inspired by Twitch Plays Pokemon",
        source_url:{
            name:"GitHub",
            url: "https://github.com/pahgawk/Twitch-Plays-Scribbler"},
        type: "web",
        date: "November 2014"
    },{
        name: "WatAreFriends",
        description: "Hackathon project: by using this tool, you'll be able to figure out if you're on stream with people you meet, so that you can figure out if a friendship will work.",
        url:{
            name:"Webapp",
            url: "http://watarefriends.herokuapp.com"},
        type: "web",
        date: "November 2014"
    },{
        name: "UWInfosession App",
        description: "Nodejs API and Android app to find the time and location of job info sessions on campus",
        source_url:{
            name:"GitHub",
            url: "https://github.com/icechen1/uw_infosession"},
        type: "web",
        date: "October 2014"
    },{
        name: "Unsentletters",
        description: "A little website to display random letters from reddit.com/r/unsentletters.",
        url:{
            name:"Webapp",
            url: "http://Unsentletters.herokuapp.com/"},
        type: "web",
        date: "October 2014"
    },{
        name: "CVPress",
        description: "Linkedin resume generator for Hack the North",
        source_url:{
            name:"Github",
            url: "https://github.com/icechen1/CVPress"},
        type: "web",
        date: "September 2014"
    },{
        name: "Art For Healing",
        description: "Web design project for a local NGO, in Wordpress.",
        url:{
            name:"Website",
            url: "http://artforhealingfoundation.org/"},
        type: "web",
        date: "June - September 2014"
    },{
        name: "SchedulingDirect",
        description: "Android app development for local startup",
        type: "android",
        date: "June - September 2014"
    },{
        name: "EarthGuesser",
        description: "EarthGuesser is an educational puzzle game that takes you to a random Google Street View location around the world and challenges you to guess its location on a map.",
        type: "android",
        date: "June - September 2014",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.whereami&hl=en"
        }},{
        name: "NightLamp",
        description: "NightLamp turns your phone into an intelligent night light and clock, allowing you to sleep with ease.",
        type: "android",
        date: "June - September 2014",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.nightlamp"}},{
        name: "Marianopolis Robotics",
        description: "Website designed for the Marianopolis Robotics team for the CRC robotics competition in Quebec, Canada.",
        type: "web",
        date: "2013",
        url:{
            name:"Website",
            url: "http://yuchenhou.com/robotics/old/"}
            },{
        name: "Face2Gif",
        description: "Face2Gif is the fastest way to create your own animated gifs right from your phone or tablet!",
        type: "android",
        date: "2013",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.face2gif"}
            }
        ,{
        name: "SpeechJammer",
        description: "SpeechJammer inhibits speech on the user, thanks to the Delayed Auditory Feedback effect.",
        type: "android",
        date: "2013",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.face2gif"}
    },{
        name: "TakeABreak",
        description: "TakeABreak lets you quickly find nearby public restrooms and drinking water fountains close to you. Winning project at Canadawide Science Fair 2014.",
        type: "android",
        date: "2013",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.bathroomfinder"}
    },{
        name: "Notable",
        description: "Notable allows you to create notification reminders on the go.",
        type: "android",
        date: "2013",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.notable"}
    },{
        name: "SleepyTime",
        description: "SleepyTime is an app designed to help you wake up in-between sleep cycles and allows you to start the day with a clear mind. Android app on Google Play Inspired by sleepyti.me.",
        type: "android",
        date: "2013",
        url:{
            name:"Play Store",
            url: "https://play.google.com/store/apps/details?id=com.icechen1.sleepytime"}
    },{
        name: "Cappd.me",
        description: "A link shortener service with quota caps and time limits.",
        type: "web",
        date: "2012",
        source_url:{
            name:"GitHub",
            url: "https://github.com/icechen1/cappdme"}
    },
                       {
        name: "Metal Sniffer",
        description: "This app detects nearby electromagnetic fields using the phone's built-in magnetometer/compass.",
        type: "android",
        date: "2012",
        url:{
            name:"Play Store",
            url: "http://play.google.com/store/apps/details?id=com.icechen1.metalsniffer"}
    }
    ];

    $scope.direction = function(index){
        if(index % 2){
            return "left";
        }else{
            return "right";
        }
    }
    angular.element(document).ready(function () {
        //hide timeline blocks which are outside the viewport
        var timeline_block = $('.timeline-block');
        //console.log(timeline_block)
        timeline_block.each(function(){

            if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.65) {
                $(this).find('.timeline-badge, .timeline-panel').addClass('is-hidden');
                //console.log('add')
            }else{
                $(this).find('.timeline-badge, .timeline-panel').addClass('bounce-in');
            }
        });

        //on scrolling, show/animate timeline blocks when enter the viewport
        $(window).on('scroll', function(){
            timeline_block.each(function(){
                if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.65 && $(this).find('.timeline-badge').hasClass('is-hidden') ) {
                    $(this).find('.timeline-badge, .timeline-panel').removeClass('is-hidden').addClass('bounce-in');
                }
            });
        });
    });
});
routerApp.controller('AboutController', function($scope) {
    $scope.load = function(){
        _500px.api('/photos', { feature: 'user', username: "yuchenhou",image_size:5 }, function (response) {
            var value = Math.floor((Math.random() * response.data.photos.length));

            $('<img/>').attr('src', response.data.photos[value].image_url).load(function() {
                $(this).remove(); // prevent memory leaks as @benweet suggested
                $('#overlay_500px').css("background-image", "url("+response.data.photos[value].image_url+")");
                $( "#overlay_500px" ).fadeTo( "slow" , 0.4, function() {
                // Animation complete.
                });
            });
        });
        return true;
    }
});

routerApp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
