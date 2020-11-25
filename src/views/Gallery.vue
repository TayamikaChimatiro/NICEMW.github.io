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
            <b>Gallery</b>
          </h1>
          <div class="gallery">
            <div
              class="gallery-panel"
              v-for="gallery in gallerys"
              :key="gallery.key"
            >
              <div v-for="image in gallery.images" :key="image">
                <img :src="image" alt="images" width="1000" height="3000" />
              </div>
              <p>{{ gallery.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebaseInit";
export default {
  components: {},
  bodyClass: "profile-page",
  data() {
    return {
      gallerys: [],
    };
  },
  methods: {
    readGallery() {
      db.collection("gallerys")
        .get()
        .then((querySnapshot) => {
          this.gallerys = [];
          querySnapshot.forEach((doc) => {
            const data = {
              key: doc.id,
              date: new Date().toISOString().slice(0, 10),
              title: doc.data().title,
              images: doc.data().images,
            };
            this.gallerys.push(data);
          });
        });
    },
  },
  mounted() {
    this.readGallery();
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
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
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: auto;
    margin: 5rem auto;
    padding:auto;
  }
  .gallery-panel img {
    width: auto;
    height: auto;
    object-fit: cover;
    border-radius: 0.75rem;
  }
// .section {
//   padding: 0;
// }

// .profile-tabs::v-deep {
//   .md-card-tabs .md-list {
//     justify-content: center;
//   }

//   [class*="tab-pane-"] {
//     margin-top: 3.213rem;
//     padding-bottom: 50px;

//     img {
//       margin-bottom: 5.142rem;
//     }
//   }
// }
// * {
//   box-sizing: border-box;
// }

// body {
//   background-color: #f1f1f1;
//   padding: 20px;
//   font-family: Arial;
// }

// /* Center website */
// .main {
//   max-width: 1000px;
//   margin: auto;
// }

h1 {
  font-size: 50px;
  word-break: break-all;
}

// .gallery {
//   margin: 8px -16px;
// }

// /* Add padding BETWEEN each column (if you want) */
// .gallery,
// .gallery > .column {
//   padding: 8px;
// }

// /* Create four equal columns that floats next to each other */
// .gallery-panel {
//   float: left;
//   width: 25%;
// }

// /* Clear floats after rows */
// .gallery:after {
//   content: "";
//   display: table;
//   clear: both;
// }

// /* Content */
// .content {
//   background-color: white;
//   padding: 10px;
// }

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .gallery-panel {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 60px) {
  .gallery-panel img{
    width: 60%;
  }
}
</style>
