<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h4 class="h1">
            <b>Create a new News feed</b>
          </h4>
          <div class="section text-center">
            <form @submit.prevent="onUpdateForm">
              <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="blogs.title"/>
              </div>

              <div class="form-group">
                <md-field>
                  <label>Description</label>
                  <md-textarea v-model="blogs.description"></md-textarea>
                </md-field>
              </div>

              <div class="form-group">
                <button class="btn btn-primary btn-block">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb,db } from "../firebaseInit";

export default {
  name: "date",
  data: () => ({
    selectedDate: null
  }),
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  data() {
    return {
      blogs: {}
    };
  },
  created() {
    let dbRef = db.collection("blogs").doc(this.$route.params.id);
    dbRef
      .get()
      .then(doc => {
        this.blogs = doc.data();
      })
      .catch(error => {
        
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("blogs")
        .doc(this.$route.params.id)
        .update(this.blogs)
        .then(() => {
          this.$router.push("/listnews");
        })
        .catch(error => {
        });
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

