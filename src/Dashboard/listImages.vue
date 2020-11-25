<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item"></div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Image list</h2>
          </div>
          <md-table md-card>
            <md-table-row>
              <md-table-head>Title</md-table-head>
              <md-table-head>Action</md-table-head>
            </md-table-row>

            <md-table-row v-for="image in gallery" :key="image.key">
              <md-table-cell>{{ image.title }}</md-table-cell>
              <md-table-cell>
                <md-button
                  @click.prevent="deleteUser(image.key)"
                  class="btn btn-danger"
                  >Delete</md-button
                >
              </md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebaseInit";

export default {
  components: {},
  name: "listImages",
  bodyClass: "listImages",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
    },
  },
  data() {
    return {
      gallerys: [],
      gallery: {
        title: "",
        images: [],
        date: new Date().toISOString().slice(0, 10),
      },
    };
  },
  created() {
    db.collection("gallerys").onSnapshot((snapshotChange) => {
      this.gallery = [];
      snapshotChange.forEach((doc) => {
        this.gallery.push({
          key: doc.id,
          title: doc.data().title,
          images: doc.data().images,
          date: new Date().toISOString().slice(0, 10),
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("gallerys")
          .doc(id)
          .delete()
          .then(() => {})
          .catch((error) => {});
      }
    },
    watcher() {
      db.collection("gallerys").onSnapshot((querySnapshot) => {
        this.gallery = [];
        querySnapshot.forEach((doc) => {
          this.gallery.push(doc);
        });
      });
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

<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
.md-rose {
  margin-right: 12px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.text {
  text-justify: inter-word;
  text-align: justify;
  color: black;
}
</style>
