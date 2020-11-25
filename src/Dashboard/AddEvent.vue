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
            <b>Create Event</b>
          </h1>
          <div class="section text-center">
            <div class="container">
              <form @submit.prevent="onFormSubmit">
                <md-field>
                  <label>Event Title</label>
                  <md-input v-model="shows.title"></md-input>
                </md-field>
                <md-field>
                  <label>Event Date</label>
                  <md-input v-model="shows.date"></md-input>
                </md-field>
                <md-field>
                  <label>Description</label>
                  <md-textarea v-model="shows.description"></md-textarea>
                  <md-icon>description</md-icon>
                </md-field>
                <div class="form-group">
                  <md-button class="md-raised" type="submit"
                    >Add Event</md-button
                  >
                </div>
              </form>
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
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
    },
  },
  data() {
    return {
      shows: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("shows")
        .add(this.shows)
        .then(() => {
          alert("event successfully created!");
          this.shows.title = "";
          this.shows.date = "";
          this.shows.description = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
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
