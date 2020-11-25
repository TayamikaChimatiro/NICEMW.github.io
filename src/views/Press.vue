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
            <b>Press</b>
          </h1>
          <div class="map" v-for="doc in documents" :key="doc.key">
            <a :href="doc.docs">Download</a>
            <iframe
              :src="doc.docs"
              frameborder="0"
              height="93790px"
              width="2600px"
            ></iframe>
          </div>
          <div class="map" v-for="doc in documents" :key="doc.key">
            <h4>
              <br />
              <b>{{ doc.date }}</b>
            </h4>
          </div>
        </div>
        <div>
          <a
            class="twitter-timeline"
            data-width="400"
            data-height="300"
            data-theme="dark"
            href="https://twitter.com/MwNewsAgency?ref_src=twsrc%5Etfw"
            >Tweets by MwNewsAgency</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebaseInit";
export default {
  data() {
    return {
      documents: [],
    };
  },
  created() {
    db.collection("documents").onSnapshot((snapshotChange) => {
      this.blogs = [];
      snapshotChange.forEach((doc) => {
        this.documents.push({
          key: doc.id,
          date: doc.data().date,
          docs: doc.data().docs,
        });
      });
    });
  },
  // methods: {
  //   deleteBlog(id) {
  //     if (window.confirm("Do you really want to delete?")) {
  //       db.collection("blogs")
  //         .doc(id)
  //         .delete()
  //         .then(() => {
  //           console.log("Document deleted!");
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     }
  //   },
  // },
  // mounted() {
  //   this.readDoc();
  // },
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
  },
};
</script>

<style lang="scss" scoped>
.map {
  display: flex;
  justify-content: center !important;
  height: 940px;
  text-align: center;
}
.h1 {
  color: black;
}
.text {
  text-justify: inter-word;
  text-align: justify;
  color: black;
}
.section {
  padding: 400;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
