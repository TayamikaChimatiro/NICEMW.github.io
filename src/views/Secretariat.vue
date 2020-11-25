<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
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
                      ><br />
                      <small class="card-description text-muted"
                        >0996 617 765</small
                      ><br />
                      <small class="card-description text-muted"
                        >omwalubunju@nice.mw / ollenmw@gmail.com</small
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
                      ><br />
                      <small class="card-description text-muted"
                        >0994 376 538</small
                      ><br />
                      <small class="card-description text-muted"
                        >gkalindekafe@nice.mw / gkalindekafe@yahoo.com  </small
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
                        >Finance and Administration Manager </small
                      ><br />
                      <small class="card-description text-muted"
                        ></small
                      ><br />
                      <small class="card-description text-muted"
                        >  </small
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
export default {
  props: {
    header: {
      type: String,
      default: require("@/assets/img/Blue.jpg"),
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
.h1 {
  color: black;
}
.text {
  text-justify: inter-word;
  text-align: justify;
  color: black;
}
.section {
  padding: 0;
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
