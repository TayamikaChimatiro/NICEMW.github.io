<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h4 class="h1">
            <b>Create a new News feed</b>
          </h4>
          <div class="section text-center">
            <form>
              <div class="container">
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <label>Title</label>
                    <md-input
                      v-model="blog.title"
                      id="title"
                      required
                    ></md-input>
                    <span class="md-helper-text">Title of News feed</span>
                  </md-field>
                </div>

                <!-- Image input -->
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <md-file
                      type="file"
                      @change="uploadImage"
                      placeholder="Upload Image"
                    />
                  </md-field>

                  <md-field>
                    <label>Image caption</label>
                    <md-input v-model="blog.caption" id="caption"></md-input>
                  </md-field>
                </div>

                <!-- Image preview -->
                <div class="form-group d-flex">
                  <div class="p-1" v-for="image in blog.images" :key="image">
                    <img :src="image" alt="images" width="390px" />
                  </div>
                </div>

                <!-- Blog description -->
                <div class="md-layout-item md-size-80">
                  <vue-editor v-model="blog.description" />
                </div>
                <!-- Submit -->
                <br />
                <div class="md-layout-item md-size-10">
                  <md-button class="md-rose" @click.prevent="createNews()"
                    >Post News</md-button
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { VueEditor } from "vue2-editor";

// import firebase from "firebase/app";
import { fb, db } from "../firebaseInit";
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
    },
  },
  data() {
    return {
      blogs: [],
      blog: {
        title: "",
        images: [],
        caption: "",
        description: "",
        date: new Date().toISOString().slice(0, 10),
      },
      // submitted: false,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    // oncreateNews() {
    //   const newsData = {
    //     title: this.title,
    //     images: this.image,
    //     date: new Date().toISOString().slice(0, 10),
    //     description: this.description,
    //   };
    // },
    createNews() {
      db.collection("blogs")
        .add(this.blog)
        .then(() => {
          alert("News successfully created!");
        })
        .catch((error) => {});
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        // Create a root reference
        var storageRef = fb.storage().ref("images/" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.blog.images.push(downloadURL);
            });
          }
        );
      }
    }
  }
}
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
