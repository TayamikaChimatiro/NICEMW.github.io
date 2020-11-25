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
            <h2>Mail</h2>
          </div>
          <md-table md-card>
            <md-table-row>
              <md-table-head>Name</md-table-head>
              <md-table-head>Email</md-table-head>
              <md-table-head>message</md-table-head>
              <md-table-head>Action</md-table-head>
            </md-table-row>

            <md-table-row v-for="user in users" :key="user.key">
              <md-table-cell>{{ user.name }}</md-table-cell>
              <md-table-cell>{{ user.email }}</md-table-cell>
              <md-table-cell>{{ user.message }}</md-table-cell>
              <md-table-cell>
                <md-button
                  @click.prevent="deleteUser(user.key)"
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
  name: "list",
  bodyClass: "list",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg")
    }
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    db.collection("users").orderBy("name").onSnapshot(snapshotChange => {
      this.users = [];
      snapshotChange.forEach(doc => {
        this.users.push({
          key: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          message: doc.data().message
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            
          })
          .catch(error => {
            
          });
      }
    },
    watcher() {
      db.collection("users").onSnapshot(querySnapshot => {
        this.users = [];
        querySnapshot.forEach(doc => {
          this.users.push(doc);
        });
      });
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
