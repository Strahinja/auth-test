<template>
  <section>
    <v-list>
      <v-list-item
        v-for="(provider, providerIndex) in providers"
        :key="providerIndex"
        link
        @click="loginClicked(provider.name)"
      >
        <v-list-item-avatar>
          <v-icon>{{provider.icon}}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>{{provider.title}} Login</v-list-item-content>
      </v-list-item>
    </v-list>
    <v-textarea clearable v-model="log" :value="log"></v-textarea>
    <div>
      <Logo :width="350"/>
      <h1 class="title">
        NUXT
        <span class="green">JS</span>
      </h1>
      <h2 class="subtitle">Starter for CodeSandBox</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation
          <IconLink/>
        </a>
        <NLink to="/about" class="button--grey">About</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";

export default {
  components: {
    Logo,
    IconLink
  },
  data() {
    return {
      log: "",
      providers: [
        { name: "google", title: "Google", icon: "mdi-google" },
        { name: "facebook", title: "Facebook", icon: "mdi-facebook" },
        { name: "twitter", title: "Twitter", icon: "mdi-twitter" },
        { name: "github", title: "GitHub", icon: "mdi-github" }
      ]
    };
  },
  methods: {
    consoleLog(text) {
      if (this.log !== null) {
        this.log += text + "\n";
      } else {
        this.log = text + "\n";
      }
    },
    async loginClicked(providerName) {
      this.consoleLog(`login: ${providerName}`);
      try {
        let res = await this.$auth.loginWith(providerName);
        console.log("login result: " + res);
      } catch (err) {
        this.consoleLog("login error: " + err);
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
