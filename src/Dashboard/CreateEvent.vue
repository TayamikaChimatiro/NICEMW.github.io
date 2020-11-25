<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1 class="h1">
            <b>Create Event</b>
          </h1>
          <div class="section text-center">
            <div class="container">
              <div class="md-layout">
                <md-button class="md-rose md-raised" to="/addevent">Add Event</md-button>
              </div>
              
              <table>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            <tr v-for="show in shows" :key="show.key">
              <td>{{ show.title }}</td>
              <td>{{ show.description }}</td>
              <td>
                <md-button class="md-icon-button md-rose" :to="'/editevent/'+show.key">
                  <md-icon>edit</md-icon>
                </md-button>

                <md-button class="md-icon-button md-rose" @click.prevent="deleteShows(show.key)">
                  <md-icon>delete_forever</md-icon>
                </md-button>
              </td>
            </tr>
          </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb,db } from "../firebaseInit";

export default {
  name: "TextFields",
  data: () => ({
    initial: "Initial Value",
    inline: null,
    disabled: null
  }),
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg")
    }
  },
  data() {
    return {
      shows: []
    };
  },
  created() {
    db.collection("shows").onSnapshot(snapshotChange => {
      this.shows = [];
      snapshotChange.forEach(doc => {
        this.shows.push({
          key: doc.id,
          title: doc.data().title,
          date: new Date().toISOString().slice(0, 10),
          description: doc.data().description
        });
      });
    });
  },
  methods: {
    deleteShows(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("shows")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        // Create a root reference
        var storageRef = fb.storage().ref("images/" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.blog.images.push(downloadURL);
              console.log("File available at", downloadURL);
            });
          }
        );
      }
    },
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

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.h1 {
  color: rgb(11, 80, 145);
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