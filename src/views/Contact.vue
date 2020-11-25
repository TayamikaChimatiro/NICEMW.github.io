<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1>CONTACT US</h1>
          <!-- <div class="newspaper">

            <md-list>
              <md-list-item>
                <p>
                  <i class="material-icons">phone</i>
                  01 770 676 / 01 770 643
                </p>
              </md-list-item>
              <md-list-item>
                <p>
                  <i
                    class="fab fa-whatsapp"
                    style="font-size:28px;color:black"
                  ></i
                  >N/A
                </p>
              </md-list-item>

              <md-list-item>
                <p>
                  <i class="material-icons">email</i
                  >nicepublictrust.mw@gmail.com
                </p>
              </md-list-item>

              <md-list-item>
                <p>
                  <i class="material-icons">access_time</i>Mon - Fri: 07:30AM -
                  17:00 PM
                </p>
              </md-list-item>
            </md-list>

            <md-list>
              <md-list-item>
                <p>
                  <i class="material-icons">phone</i>
                  Dowa District
                </p>
              </md-list-item>

              <md-list-item>
                <p>
                  <i class="material-icons">person_pin_circle</i>098765432113
                </p>
              </md-list-item>

              <md-list-item>
                <p>
                  <i class="material-icons">person_pin_circle</i>098765432113
                </p>
              </md-list-item>

              <md-list-item>
                <p><i class="material-icons">email</i>sample</p>
              </md-list-item>
            </md-list>

            <md-list>
              <md-list-item>
                <p>
                  <i class="material-icons">phone</i>
                  Karaonga
                </p>
              </md-list-item>

              <md-list-item>
                <p>
                  <i class="material-icons">person_pin_circle</i>098765432113
                </p>
              </md-list-item>

              <md-list-item>
                <p>
                  <i class="material-icons">person_pin_circle</i>098765432113
                </p>
              </md-list-item>

              <md-list-item>
                <p><i class="material-icons">email</i>SAmple</p>
              </md-list-item>
            </md-list>
          </div> -->
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>NICE Public Trust Head Office</h3>
                <p>
                  <i class="material-icons">phone</i>
                  01 770 676 / 01 770 643
                </p>
                <i
                  class="fab fa-whatsapp"
                  style="font-size:28px;color:black"
                ></i
                >N/A
                <p>
                  <i class="material-icons">email</i
                  >nicepublictrust.mw@gmail.com
                </p>
                <p>
                  <i class="material-icons">access_time</i>Mon - Fri: 07:30AM -
                  17:00 PM
                </p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>CENTRAL REGION Private Bag A137 Lilongwe</h3>
                <p>
                  <i class="material-icons">phone</i>
                  01 770 676 / 01 770 643
                </p>
                <p>Enock Chinkhuntha 0998208925 0888 208 925</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>NORTHERN REGION Private Bag 124 Mzuzu</h3>
                <p><i class="material-icons">phone</i> 01 311486</p>
                <p>Vincent Kalawa 0888586563 0999601538</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>SOUTHERN REGION P.O Box 32219 Chichiri Blantyre 3</h3>
                <p><i class="material-icons">phone</i></p>
                <p>Christopher Naphiyo 0888 349 396 0999 917 294 0993462032</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                <h4 class="text-center title">
                  <b>Locate us</b>
                </h4>
                <section class="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.932270112626!2d33.75408471483279!3d-13.962637090211267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d3e7fc8f2e3b%3A0x6f34740644e018bf!2sKizito%20House!5e0!3m2!1sen!2smw!4v1602511977748!5m2!1sen!2smw"
                    width="800"
                    height="600"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </section>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                <h2 class="text-center title">Contact us</h2>
                <form class="contact-form" @submit.prevent="onFormSubmit">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-50">
                      <md-field>
                        <label>Your Name</label>
                        <md-input
                          v-model="user.name"
                          type="text"
                          required
                        ></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-size-50">
                      <md-field>
                        <label>Your Email</label>
                        <md-input
                          v-model="user.email"
                          type="email"
                          required
                        ></md-input>
                      </md-field>
                    </div>
                  </div>
                  <md-field maxlength="5">
                    <label>Your Message</label>
                    <md-textarea v-model="user.message"></md-textarea>
                  </md-field>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-33 mx-auto text-center">
                      <md-button class="md-success" type="submit"
                        >Send Message</md-button
                      >
                    </div>
                  </div>
                </form>
              </div>
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
  data() {
    return {
      users: [],
      user: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("Your details have been recieved, Thank you!");
          this.user.name = "";
          this.user.email = "";
          this.user.message = "";
        })
        .catch((error) => {});
    },
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
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

<style lang="scss" scoped>
.section {
  padding: 0;
}
.map {
  display: flex;
  justify-content: center !important;
  height: 940px;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    display: grid;
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

.newspaper {
  column-count: 3;
  column-gap: 40px;
  column-rule-style: solid;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
