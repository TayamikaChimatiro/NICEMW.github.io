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
            <h2>News Lists</h2>
          </div>
          <table>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
            <tr v-for="blog in blogs" :key="blog.key">
              <td>{{ blog.title }}</td>
              <td>
                <md-button
                  class="md-icon-button md-rose"
                  :to="'/editnews/' + blog.key"
                >
                  <md-icon>
                    edit
                  </md-icon>
                </md-button>

                <md-button
                  class="md-icon-button md-rose"
                  @click.prevent="deleteBlog(blog.key)"
                >
                  <md-icon>delete_forever</md-icon>
                </md-button>
              </td>
            </tr>
          </table>
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
      default: require("@/assets/img/Blue.jpg")
    }
  },
  data() {
    return {
      blogs: []
    };
  },
  created() {
    db.collection("blogs").onSnapshot(snapshotChange => {
      this.blogs = [];
      snapshotChange.forEach(doc => {
        this.blogs.push({
          key: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
      });
    });
  },
  methods: {
    deleteBlog(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("blogs")
          .doc(id)
          .delete()
          .then(() => {})
          .catch(() => {});
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
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
