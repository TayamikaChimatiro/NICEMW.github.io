<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h3 slot="title" class="card-title">Login</h3>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input type="password" v-model="password"></md-input>
              </md-field>
              <md-button
                v-on:click.prevent="login"
                type="submit"
                slot="buttom"
                class="md-simple md-success md-lg"
              >
                Login
              </md-button>
              <md-button
                slot="buttom"
                class="md-simple md-success md-lg"
                to="/"
              >
                Cancel
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { fb } from "../firebaseInit";
import "firebase/auth";

export default {
  components: {
    LoginCard,
  },
  bodyClass: "login-page",
  methods: {
    async login(e) {
      fb
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`You are logged in as ${user.firstname}`);
            this.$router.go({ path: this.$router.path });
          },
          (err) => {
            alert(err.message);
          }
        );

      e.preventDefault();
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="css"></style>
