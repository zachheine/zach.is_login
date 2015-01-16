User = {}

if (Meteor.isClient) {

	Meteor.startup(function(){
	    Hooks.init();
	});

	Hooks.onLoggedIn = function () {
		console.log('Logged in');
		console.log(Meteor.user());
		User = Meteor.user();
	}


}