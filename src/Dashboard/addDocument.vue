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
            <b>Add Document</b>
          </h4>
          <div class="section text-center">
            <form>
              <div class="container">
                <!-- Image input -->
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <md-file
                      type="file"
                      @change="uploadDoc"
                      placeholder="Upload Document"
                    />
                  </md-field>
                </div>

                <!-- Document preview -->
                <div class="form-group d-flex">
                  <div class="p-1" v-for="doc in document.docs" :key="doc.key">
                    <iframe :src="doc" frameborder="0"></iframe>
                  </div>
                </div>

                <!-- Submit -->
                <br />
                <div class="md-layout-item md-size-10">
                  <md-button class="md-rose" @click.prevent="createDoc()"
                    >Post Doc</md-button
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

export default {
  components: {},
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg")
    }
  },
  data() {
    return {
      documents: [],
      document: {
        docs: [],
        date: new Date().toISOString().slice(0, 10)
      }
      // submitted: false,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    // oncreateDoc() {
    //   const newsData = {
    //     doc: this.doc,
    //     date: new Date().toISOString().slice(0, 10),
    //   };
    // },
    createDoc() {
      db.collection("documents")
        .add(this.document)
        .then(() => {
          alert("Document successfully added!");
        })
        .catch(error => {
          
        });
    },
    uploadDoc(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        // Create a root reference
        var storageRef = fb.storage().ref("documents/" + file.name);

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
              this.document.docs.push(downloadURL);
              
            });
          }
        );
      }
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
