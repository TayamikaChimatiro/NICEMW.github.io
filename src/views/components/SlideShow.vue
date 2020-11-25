<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-100 mx-auto md-small-size-100">
        <md-card>
          <carousel
            :per-page="1"
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
      carousel2: require("@/assets/img/giz.jpg"),
      carousel3: require("@/assets/img/MG.png"),
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    }
  }
};
</script>
