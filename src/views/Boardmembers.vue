<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Board Members</h2>
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
                      Dr Zolomphi Nkowani
                      <br />
                      <small class="card-description text-muted"
                        >Board Chair</small
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
                      Auda Msiska
                      <br />
                      <small class="card-description text-muted">
                        Vice Board Chair</small
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
                      Dr John Mataya
                      <br />
                      <small class="card-description text-muted"> Member</small>
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
                      Jennipher MKandawire
                      <br />
                      <small class="card-description text-muted"
                        >Member</small
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
                      Kent Mphepo
                      <br />
                      <small class="card-description text-muted">
                        Member</small
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
                      Amos Tizora
                      <br />
                      <small class="card-description text-muted"> Member</small>
                    </h4>
                    <!-- <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/abel-khombe-acma-75a59935"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions> -->
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
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/new/118843859_2663794400556865_5045684288130955588_n.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/User.png"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/User.png"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/User.png"),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
