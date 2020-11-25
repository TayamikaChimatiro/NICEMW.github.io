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
            <b>Edit Staff list</b>
          </h4>
          <div class="section text-center">
            <h4 class="text-center">
              <b>Staff list</b>
            </h4>
            <form>
              <div class="container">
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <label>Name</label>
                    <md-input
                      v-model="staff.name"
                      id="name"
                      required
                    ></md-input>
                    <span class="md-helper-text">Name of Employee</span>
                  </md-field>
                </div>
                <br />
                <!-- Position of employee -->
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <label>Position</label>
                    <md-input
                      v-model="staff.position"
                      id="Position"
                      required
                    ></md-input>
                    <span class="md-helper-text">Position of Employee</span>
                  </md-field>
                </div>
                <br />
                <!-- CELLPHONE of employee -->
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <label>Cellphone</label>
                    <md-input
                      v-model="staff.number"
                      id="Cellphone"
                      required
                    ></md-input>
                    <span class="md-helper-text"
                      >Cellphone No. of Employee</span
                    >
                  </md-field>
                </div>
                <br />
                <!-- EMAIL ADDRESS of employee -->
                <div class="md-layout-item md-size-60">
                  <md-field>
                    <label>E-mail Address</label>
                    <md-input
                      v-model="staff.email"
                      id="E-mail Address"
                      required
                    ></md-input>
                    <span class="md-helper-text"
                      >E-mail Address of Employee</span
                    >
                  </md-field>
                </div>
                <br />
                <!-- Submit -->
                <br />
                <div class="md-layout-item md-size-10">
                  <md-button class="md-rose" @click.prevent="onUpdate()"
                    >Save</md-button
                  >
                </div>
              </div>
            </form>
            <br />
            <hr style="width:50%" />
            <br />
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
  components: {
    // VueEditor,
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
    },
  },
  data() {
    return {
      staffs: [],
      staff: {
        name: "",
        position: "",
        number: "",
        email: "",
        date: new Date().toISOString().slice(0, 10)
      }
    };
  },
  created() {
    let dbRef = db.collection("staffs").doc(this.$route.params.id);
    dbRef
      .get()
      .then(doc => {
        this.staff = doc.data();
      })
      .catch(error => {
      });
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    onUpdate() {
      db.collection("staffs")
        .doc(this.$route.params.id)
        .update(this.staff)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(error => {
        });
    },
  },
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
