<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1 class="h1">
            <b>Events</b>
          </h1>
          <!-- <div class="md-layout-item md-size-30">
            <md-field>
              <label>Search Event</label>
              <md-input v-model="search" id="search"></md-input>
            </md-field>
          </div> -->
          <div class="section text-center">
            <div class="container">
              <div id="show-blogs">
                <div
                  v-for="show in shows"
                  :key="show.key"
                  class="single-blog"
                >
                  <h2>Event Title:<br>{{ show.title }}</h2>
                  <br />
                  <h2>When: <br> {{ show.date }}</h2>
                  <h3>Description: <br> {{ show.description }}</h3>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination";
import * as firebase from "firebase/app";
import { fb,db } from "../firebaseInit";
import router from "../router";

export default {
  components: {
    Pagination,
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Banner.jpg"),
    },
  },
  data() {
    return {
      shows: [],
      search: "",
    };
  },
  methods: {
    readShows() {
      db.collection("shows")
        .get()
        .then((querySnapshot) => {
          this.shows = [];
          querySnapshot.forEach((doc) => {
            const data = {
              key: doc.id,
              date: doc.data().date,
              title: doc.data().title,
              description: doc.data().description,
            };
            this.shows.push(data);
          });
        });
    },
  },
  mounted() {
    this.readShows();
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
    // filteredShows: function() {
    //   return this.shows.filter((show) => {
    //     return show.title.match(this.search);
    //   });
    // },
  },
  // filters: {
  //   toUppercase(value) {
  //     return value.toUpperCase();
  //   },
  //   snippet(value) {
  //     return value.slice(0, 100) + "...";
  //   },
  // },
};
</script>

<style lang="scss" scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  display: grid;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
