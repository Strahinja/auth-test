export default {
  facebook: {},
  google: {
    client_id: ""
  },
  facebook: {
    client_id: "",
    scope: ["public_profile", "email", "user_birthday"],
    userinfo_endpoint:
      "https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday"
  },
  github: {
    client_id: "",
    client_secret: ""
  },
  twitter: {
    client_id: "",
    client_secret: ""
  }
};
