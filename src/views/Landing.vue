<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <!--<div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Your Story Starts With Us.</h1>
            <h4>
              Every landing page needs a small description after the big bold
              title, that's why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>-->
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Who are we?</h2>
              <h5 class="description">
                The National Initiative for Civic Education was a general
                understanding, that the 1999 general elections would face
                considerable challenges because democratic values, principles
                and processes were not sufficiently entrenched in Malawian
                society.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>remove_red_eye</md-icon>
                  </div>
                  <h4 class="info-title">Vision</h4>
                  <p>
                    “A well informed, empowered, responsive and transformed
                    Malawian society that actively participates in public life.”
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>account_balance</md-icon>
                  </div>
                  <h4 class="info-title">Mission</h4>
                  <p>
                    NICE is a Public Trust committed to deepening democracy and
                    good governance among Malawians through provision of civic
                    and voter education, community empowerment and mobilisation,
                    knowledge management and networking.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>poll</md-icon>
                  </div>
                  <h4 class="info-title">Purpose</h4>
                  <p>
                    To enhance the ability of Malawian citizens (including
                    disadvantaged groups) to participate in public life, and to
                    encourage them to exercise their democratic rights and
                    responsibilities, as well as to participate in the
                    democratic decision-making process at community, district
                    and national levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PL93UQqgOn-nuGB2aAVFDPAzZWYQk7KLS1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h2 class="title text-center">Our Partners</h2>
      </div>
      <Partners />
      <h2 class="title">Social Media</h2>
      <div class="map">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FNicePublicTrust%2F&tabs=timeline&width=450&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="450"
          height="850"
          style="border:none;overflow:hidden"
          scrolling="yes"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
          data-lazy
        ></iframe>

        <a
          class="twitter-timeline"
          width="450"
          height="450"
          href="https://twitter.com/NICEMalawi?ref_src=twsrc%5Etfw"
          >Tweets by NICEMalawi</a
        >
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Secretariat</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle"
                      />
                    </div>
                    <h4 class="card-title">
                      Ollen Mwalubunju
                      <br />
                      <small class="card-description text-muted"
                        >Executive Director</small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle"
                      />
                    </div>
                    <h4 class="card-title">
                      Gray Kalindekafe
                      <br />
                      <small class="card-description text-muted"
                        >National Programs Manager</small
                      >
                    </h4>
                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/gray-kalindekafe-7476a8138"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle "
                      />
                    </div>
                    <h4 class="card-title">
                      Abel Khombe
                      <br />
                      <small class="card-description text-muted"
                        >Finance and Administration Manager</small
                      >
                    </h4>
                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/abel-khombe-acma-75a59935"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Partners from "../views/components/Partners";

export default {
  components: {
    Partners,
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/new/118767486_2663794513890187_3506402542137757620_n.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/managers/IMG-20200916-WA0003.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/managers/IMG-20200916-WA0002.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/User.png"),
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
.map {
  display: flex;
  justify-content: auto;
  height: 430px;
  grid-gap: 4rem;
  padding: 0 10rem;
}
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
  color: black;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: "";
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 4.9%;
  width: 90%;
  height: 80%;
}
</style>
