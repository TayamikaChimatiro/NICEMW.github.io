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
            <b>News Letters</b>
          </h1>
        </div>
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
      default: require("@/assets/img/Banner.jpg"),
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
  height: 940px;
}

.h1 {
  color: black;
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
