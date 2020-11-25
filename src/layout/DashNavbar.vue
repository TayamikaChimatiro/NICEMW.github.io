<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <md-list-item to="/dashboard" v-if="isLoggedIn">
          <h3 class="md-title">
            <strong>DASHBOARD</strong>
          </h3>
        </md-list-item>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>

            <md-list>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">local_library</i>
                        <p>Create</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <router-link to="/createnews" v-if="isLoggedIn">
                            <i class="material-icons">layers</i>
                            <p>News</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/listnews" v-if="isLoggedIn">
                            <i class="material-icons">article</i>
                            <p>List News</p>
                          </router-link>
                        </li>
                        <li>
                          <a href="/createevent" v-if="isLoggedIn">
                            <i class="material-icons">emoji_events</i>
                            <p>Event</p>
                          </a>
                        </li>
                        <li>
                          <router-link to="/createjob" v-if="isLoggedIn">
                            <i class="material-icons">layers</i>
                            <p>Job Posts</p>
                          </router-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <div>
                <md-list-item href="/adddocument" v-if="isLoggedIn">
                  <i class="material-icons">chrome_reader_mode</i>
                  <p>Press Release</p>
                </md-list-item>
              </div>
              <div>
                <md-list-item href="/listdocument" v-if="isLoggedIn">
                  <i class="material-icons">picture_as_pdf</i>
                  <p>List Document</p>
                </md-list-item>
              </div>
              <div>
                <md-list-item href="/listimages" v-if="isLoggedIn">
                  <i class="material-icons">wallpaper</i>
                  <p>List Image</p>
                </md-list-item>
              </div>
              
              <div>
                <md-list-item href="/addimage" v-if="isLoggedIn">
                  <i class="material-icons">add_a_photo</i>
                  <p>Add Images</p>
                </md-list-item>
              </div>
              <div>
                <md-list-item href="/createstaff" v-if="isLoggedIn">
                  <i class="fas fa-user-plus"></i>
                  <p>Staff</p>
                </md-list-item>
              </div>
              <div>
                <md-list-item
                  href="/"
                  v-on:click="logout"
                  block
                  v-if="isLoggedIn"
                >
                  <i class="material-icons">power_settings_new</i>
                  <p>Logout</p>
                </md-list-item>
              </div>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
import * as fb from "firebase/app";
import "firebase/auth";
import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      isLoggedIn: false,
      currentUser: false,
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "contact"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  created() {
    if (fb.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = fb.auth().currentUser.email;
    }
  },
  methods: {
    logout() {
      fb
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
