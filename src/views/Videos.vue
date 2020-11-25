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
            <b>Videos</b>
          </h1>
          <br />
          <section class="flexbox">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PL93UQqgOn-nuGB2aAVFDPAzZWYQk7KLS1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>
          <br />
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
      default: require("@/assets/img/Blue.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
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
.flexbox {
  display: flex;
  justify-content: center !important;
  height: 940px;
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
