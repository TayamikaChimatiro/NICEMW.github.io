<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1 class="h1">
            <b>Goals and Objectives</b>
          </h1>
          <div>
            <p class="text">
              <img src="@/assets/img/structure.png" alt="org structure" />
              <br />
              <strong>Objectives of the Trust</strong>
              <br />
              <br />NICE has a board of trustees which provides overall policy guidelines. The secretariat, headed by the Executive Director manages the daily activities of NICE which are implemented by the staff of head office, regional offices and 31 district offices. Below is the structure of NICE.
              <br />
              <br />
              <img src="@/assets/img/new/118767486_2663794513890187_3506402542137757620_n.jpg" alt="Voting" lazyloading />
            </p>
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
      default: require("@/assets/img/Banner.jpg")
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

