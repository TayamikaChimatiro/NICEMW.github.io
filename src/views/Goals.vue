<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1 class="h1"><b>Goals and Objectives</b></h1>
          <div>
            <p class="text">
              <strong>Objectives of the Trust</strong>
              <br />
              <br />The National Initiative for Civic Education (NICE) is a Civic and Voter Education project, currently funded through the 9th EDF to the tune of 8,930,000 Euros. The present project phase III is implemented under a Financing Agreement signed between the Malawi Government and the European Union in January 2006. Initially the current phase was laid out for four years, but the implementation period was extended by one year till November 2010.
              <br />
              <br />The project started its operations in 1999 and has gone through two successful phases; Phase 1 – from 1999 to 2000 and Phase II – from 2000 to 2006. In the current phase III, NICE forms one of the two components to the "Promotion of the Rule of Law and Civic Education in Malawi" project.
              <br />
              <br />The project is managed by a Project Management Unit – PMU under the supervision of the Ministry of Finance (National Authorizing Officer Support Unit). A Project Steering Committee coordinated by the Ministry of Justice provides policy guidance for the implementation of programmes.
              <br />
              <br />
              <strong>Expected Results</strong>
              <br />
              <br />
              <ul>
                  <li>Malawian citizens, including disadvantaged groups, are increasingly participating in decision-making and public life.</li>
                  <li>Citizens are increasingly aware of core principles of tolerance, human rights, rule of law and constitutionalism, among others.</li>
                  <li>Duty-bearers have become more accountable to the public.</li>
                  <li>Citizens are increasingly making use of their ability to hold duty-bearers to account for their performance.</li>
                  <li>The targeted civil society organizations have an increased capacity to implement and coordinate their civic education activities.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

