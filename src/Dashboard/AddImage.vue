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
            <b>Create Image</b>
          </h1>
          <div class="section text-center">
            <div class="container">
              <md-field>
                <label>Upload files</label>
                <md-file
                  type="file"
                  @change="uploadImage"
                  placeholder="Upload an image"
                />
              </md-field>
              <div class="form-group d-flex">
                <div class="p-1" v-for="image in gallery.images" :key="image">
                  <img :src="image" alt="images" width="390px" />
                </div>
              </div>
              <md-field>
                <label>Title</label>
                <md-input
                  v-model="gallery.title"
                  id="title"
                  required
                ></md-input>
              </md-field>
              <div class="md-layout-item md-size-10">
                <md-button class="md-rose" @click.prevent="createGallery()"
                  >Upload</md-button
                >
              </div>
              <!-- <div class="md-layout-item md-size-60">
                  <md-field>
                    <img :src="" height="300" />
                  </md-field>
                </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
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
      gallerys: [],
      gallery: {
        title: "",
        images: [],
        date: new Date().toISOString().slice(0, 10)
      }
    };
  },
  methods: {
    createGallery() {
      db.collection("gallerys")
        .add(this.gallery)
        .then(() => {
          alert("Gallery successfully created!");
        })
        .catch(error => {
          
        });
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        // Create a root reference
        var storageRef = fb.storage().ref("gallery/" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.gallery.images.push(downloadURL);
              
            });
          }
        );
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
  color: rgb(11, 80, 145) ack;
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
