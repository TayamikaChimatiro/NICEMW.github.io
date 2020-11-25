<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-100 mx-auto md-small-size-100">
        <md-card>
          <carousel
            :per-page="6"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
          >
            <slide>
              <img :src="carousel1" />
            </slide>
            <slide>
              <img :src="carousel2" />
            </slide>
            <slide>
              <img :src="carousel3" />
            </slide>
            <slide>
              <img :src="carousel4" />
            </slide>
            <slide>
              <img :src="carousel5" />
            </slide>
            <slide>
              <img :src="carousel6" />
            </slide>
            <slide>
              <img :src="carousel7" />
            </slide>
            <slide>
              <img :src="carousel8" />
            </slide>
            <slide>
              <img :src="carousel9" />
            </slide>
            <slide>
              <img :src="carousel10" />
            </slide>
            <slide>
              <img :src="carousel11" />
            </slide>
            <slide>
              <img :src="carousel12" />
            </slide>
            <slide>
              <img :src="carousel13" />
            </slide>
            <slide>
              <img :src="carousel15" />
            </slide>
            <slide>
              <img :src="carousel16" />
            </slide>
            <slide>
              <img :src="carousel17" />
            </slide>
            <slide>
              <img :src="carousel18" />
            </slide>
            <slide>
              <img :src="carousel19" />
            </slide>
            <slide>
              <img :src="carousel20" />
            </slide>
            <slide>
              <img :src="carousel21" />
            </slide>
            <slide>
              <img :src="carousel22" />
            </slide>
            <slide>
              <img :src="carousel23" />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel1: require("@/assets/img/EU.jpg"),
      carousel2: require("@/assets/img/Common_Wealth.jpg"),
      carousel3: require("@/assets/img/giz.jpg"),
      carousel4: require("@/assets/img/MG.png"),
      carousel5: require("@/assets/img/acb-logo.png"),
      carousel6: require("@/assets/img/airtel-logo.jpg"),
      carousel7: require("@/assets/img/fdh-bank-logo.png"),
      carousel8: require("@/assets/img/fei-logo.jpg"),
      carousel9: require("@/assets/img/mhrc-logo.png"),
      carousel10: require("@/assets/img/malga-logo.png"),
      carousel11: require("@/assets/img/globe-internet-limited-logo.jpg"),
      carousel12: require("@/assets/img/ipi.png"),
      carousel13: require("@/assets/img/mbc-logo.jpg"),
      carousel14: require("@/assets/img/mhrrc-logo.png"),
      carousel15: require("@/assets/img/wateraid-logo.jpg"),
      carousel16: require("@/assets/img/un-wemen-logo.gif"),
      carousel17: require("@/assets/img/tilitonse_logo.jpg"),
      carousel18: require("@/assets/img/parliament.png"),
      carousel19: require("@/assets/img/OSISA_LOGO.png"),
      carousel20: require("@/assets/img/Ombudsman_logo.jpg"),
      carousel21: require("@/assets/img/ZBS.png"),
      carousel22: require("@/assets/img/illovo.png"),
      carousel23: require("@/assets/img/mHub.png")
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    }
  }
};
</script>
