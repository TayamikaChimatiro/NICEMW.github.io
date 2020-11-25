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
            <b>News</b>
          </h1>

          <div class="section text-center">
            <div class="container">
              <div class="col-12"></div>
              <div class="row">
                <div class="column" v-for="blog in blogs" :key="blog.key">
                  <div class="card">
                    <h2>{{ blog.title }}</h2>
                    <h5>{{ blog.date }}</h5>
                    <div v-for="image in blog.images" :key="image">
                      <img :src="image" alt="image" width="900px" />
                    </div>

                    <article v-html="blog.description.slice(0, 100)"></article>
                    <md-card-actions>
                      <!-- <md-button :to="{name:'/New', params: {blog: blog.key}}">Read</md-button> -->
                      <md-button :to="'/news/' + blog.key">Read</md-button>
                    </md-card-actions>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as firebase from "firebase/app";
import { fb, db } from "../firebaseInit";
import router from "../router";

export default {
  components: {},
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Banner.jpg"),
    },
  },
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  //  firestore() {
  //   return {
  //     blogs: db.collection("blogs"),
  //   };
  // },
  methods: {
    readNews() {
      db.collection("blogs")
        .get()
        .then((querySnapshot) => {
          this.blogs = [];
          querySnapshot.forEach((doc) => {
            const data = {
              key: doc.id,
              date: doc.data().date,
              title: doc.data().title,
              images: doc.data().images,
              description: doc.data().description,
            };
            this.blogs.push(data);
          });
        });
    },
  },
  mounted() {
    this.readNews();
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
    // filteredBlogs: function() {
    //   return this.blogs.filter(blog => {
    //     return blog.title.match(this.search);
    //   });
    // }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  display: grid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
