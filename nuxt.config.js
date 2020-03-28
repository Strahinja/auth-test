import authConfig from "./auth.config.js";

require("dotenv").config({ path: ".env.production" });

export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/dotenv",
      {
        filename: ".env.production"
      }
    ]
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    //'@nuxt/http',
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  /*
   ** HTTP module configuration
   *
  http: {
    // See https://http.nuxtjs.org/api/#options
  },*/

  auth: {
    cookie: {
      options: {
        expires: 7
      }
    },
    localStorage: false,
    strategies: {
      local: false,
      google: {
        client_id: authConfig.google.client_id
      },
      facebook: {
        client_id: authConfig.facebook.client_id,
        scope: authConfig.facebook.scope,
        userinfo_endpoint: authConfig.facebook.userinfo_endpoint
      },
      github: {
        client_id: authConfig.github.client_id,
        client_secret: authConfig.github.client_secret
      },
      twitter: {
        client_id: authConfig.twitter.client_id,
        client_secret: authConfig.twitter.client_secret
      }
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login/callback"
    }
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
