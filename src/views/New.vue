<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h6 class="h1">
            <b>{{ thisBlog.title }}</b>
          </h6>
          <h3>{{ thisBlog.date }}</h3>
          <div v-for="image in thisBlog.images" :key="image">
            <img :src="image" alt="image" width="300px" />
          </div>

          <br />

          <div
            class="fb-share-button"
            data-href="https://www.facebook.com/NicePublicTrust/"
            data-layout="button_count"
            data-size="large"
          >
            <a
              class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=NICE%20Public%20Trust%20MW&url=https://www.nice.mw/news"
            >
              <i class="fab fa-twitter"></i>twitter</a
            >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FNicePublicTrust%2F&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore"
              ><span class="material-icons"> facebook </span>Share</a
            >
          </div>
          <br />

          <p class="text" v-html="thisBlog.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebaseInit";

export default {
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Banner.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
    key() {
      let fullPath = this.$route.path;
      let key = fullPath.split("/news/")[1];
      return key;
    },
    thisBlog() {
      let blogs = this.blogs;
      if (!blogs) {
        return null;
      }
      return blogs.find((bl) => {
        return bl.key == this.key;
      });
    },
  },
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    // console.log(this.key, "ssssssssssss");
  },
  methods: {
    readNews() {
      db.collection("blogs")
        .get()
        .then((querySnapshot) => {
          this.blogs = [];
          querySnapshot.forEach((doc) => {
            const data = {
              key: doc.id,
              date: new Date().toISOString().slice(0, 10),
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
};
</script>

<style lang="scss" scoped>
.fb-share-button {
  display: flex;
  grid-gap: 4rem;
  padding: 0 15rem;
}

.text {
  text-justify: inter-word;
  text-align: justify;
  color: black;
}
</style>
