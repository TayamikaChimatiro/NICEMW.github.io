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
            <b>Partners</b>
          </h1>
          <div class="section text-center">
            <div class="container">
              <h2 class="title">Partners</h2>
              <div class="team">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg1"
                            alt="Thumbnail Image"
                            class="img-raised "
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://eeas.europa.eu/delegations/malawi_en"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >European Regional Development Fund</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg2"
                            alt="Thumbnail Image"
                            class="img-raised"
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://thecommonwealth.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Common Wealth</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                        <!-- <md-card-actions class="text-center">
                          <md-button
                            href="https://www.linkedin.com/in/gray-kalindekafe-7476a8138"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-linkedin"></i>
                          </md-button>
                        </md-card-actions> -->
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg4"
                            alt="Thumbnail Image"
                            class="img-raised "
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://www.ombudsmanmalawi.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Office of the Ombudsman</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg3"
                            alt="Thumbnail Image"
                            class="img-raised"
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://www.malawi.gov.mw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Malawi Government</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
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

          <div class="section text-center">
            <div class="container">
              <div class="team">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg5"
                            alt="Thumbnail Image"
                            class="img-raised "
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="http://mec.org.mw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Malawi Electoral Commission</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg6"
                            alt="Thumbnail Image"
                            class="img-raised"
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="http://mhrcmw.org/mhrc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Malawi Human Rights Commission</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                        <!-- <md-card-actions class="text-center">
                          <md-button
                            href="https://www.linkedin.com/in/gray-kalindekafe-7476a8138"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-linkedin"></i>
                          </md-button>
                        </md-card-actions> -->
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg7"
                            alt="Thumbnail Image"
                            class="img-raised "
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://acbmw.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Anti- Corruption Bureau</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg8"
                            alt="Thumbnail Image"
                            class="img-raised"
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://www.fdh.co.mw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >FDH</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
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

          <div class="section text-center">
            <div class="container">
              <div class="team">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg9"
                            alt="Thumbnail Image"
                            class="img-raised "
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://www.unwomen.org/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >UN Women</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg10"
                            alt="Thumbnail Image"
                            class="img-raised"
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://www.wateraid.org/mw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Water Aid</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                        <!-- <md-card-actions class="text-center">
                          <md-button
                            href="https://www.linkedin.com/in/gray-kalindekafe-7476a8138"
                            class="md-just-icon md-simple"
                          >
                            <i class="fab fa-linkedin"></i>
                          </md-button>
                        </md-card-actions> -->
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg11"
                            alt="Thumbnail Image"
                            class="img-raised "
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="https://tilitonsefoundation.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Tilitonse Foundation</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
                        </h4>
                      </md-card>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img
                            :src="teamImg12"
                            alt="Thumbnail Image"
                            class="img-raised"
                          />
                        </div>
                        <h4 class="card-title">
                          <a
                            href="http://osisa.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style=" color: black; "
                            >Open Society Initiative For Southern Africa</a
                          >
                          <br />
                          <small class="card-description text-muted"></small>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: require("@/assets/img/new/118843859_2663794400556865_5045684288130955588_n.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/EU.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/Common_Wealth.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/MG.png"),
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/Ombudsman_logo.jpg"),
    },
    teamImg5: {
      type: String,
      default: require("@/assets/img/MEC-Logo.jpg"),
    },
    teamImg6: {
      type: String,
      default: require("@/assets/img/mhrc-logo.png"),
    },
    teamImg7: {
      type: String,
      default: require("@/assets/img/download.jpeg"),
    },
    teamImg8: {
      type: String,
      default: require("@/assets/img/FDH_BANK_logo.png"),
    },
    teamImg9: {
      type: String,
      default: require("@/assets/img/un-wemen-logo.gif"),
    },
    teamImg10: {
      type: String,
      default: require("@/assets/img/wateraid-logo.jpg"),
    },
    teamImg11: {
      type: String,
      default: require("@/assets/img/tilitonse_logo.jpg"),
    },
    teamImg12: {
      type: String,
      default: require("@/assets/img/OSISA_LOGO.png"),
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

a {
 font-family: 'Times New Roman', Times, serif;
 color: black;
}
a:hover {
  color: black;
}
</style>
