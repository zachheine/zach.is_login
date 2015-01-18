configureServices = function(settings) {
  // first, remove configuration entry in case service is already configured

  ServiceConfiguration.configurations.update({
      service:"facebook"
  }, {
      $set: {
        appId: "580265375373820",
        secret: "18b901e941129a6c44cf47df94d8f722"
      }
  });

  ServiceConfiguration.configurations.update({
      service:"twitter"
  }, {
      $set: {
        consumerKey: "raR9YcCwaj3AzRqMO75b7jfpU",
        secret: "xxdVl23P94SOfP1eV2TJcXsEs5bZsZHbvZQKemMqnOjMYyFiyd"
      }
  });

  ServiceConfiguration.configurations.update({
      service:"google"
  }, {
      $set: {
        clientId: "552754768826-abc3vqflklmafpji8unsn4r12c3qecc0.apps.googleusercontent.com",
        secret: "WTskK2uSztinFecSfK2Leoms"
      }
  });
};

// set the settings object with meteor --settings private/settings-local.json
var settings = Meteor.settings;
// if(settings) {
    configureServices(settings);
//
configureServices();