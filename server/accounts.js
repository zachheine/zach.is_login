// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: "580265375373820",
  secret: "18b901e941129a6c44cf47df94d8f722"
});

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});
Accounts.loginServiceConfiguration.insert({
  service: "twitter",
  consumerKey: "raR9YcCwaj3AzRqMO75b7jfpU",
  secret: "xxdVl23P94SOfP1eV2TJcXsEs5bZsZHbvZQKemMqnOjMYyFiyd"
});

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});
Accounts.loginServiceConfiguration.insert({
  service: "google",
  clientId: "552754768826-abc3vqflklmafpji8unsn4r12c3qecc0.apps.googleusercontent.com",
  secret: "WTskK2uSztinFecSfK2Leoms"
});