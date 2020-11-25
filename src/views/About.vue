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
            <b>ABOUT NICE</b>
          </h1>
          <div>
            <p class="text">
              <strong>Background</strong>
              <br />
              <br />The National Initiative for Civic Education (NICE) is a
              Civic and Voter Education project, currently funded through the
              9th EDF to the tune of 8,930,000 Euros. The present project phase
              III is implemented under a Financing Agreement signed between the
              Malawi Government and the European Union in January 2006.
              Initially the current phase was laid out for four years, but the
              implementation period was extended by one year till November 2010.
              <br />
              <br />The project started its operations in 1999 and has gone
              through two successful phases; Phase 1 – from 1999 to 2000 and
              Phase II – from 2000 to 2006. In the current phase III, NICE forms
              one of the two components to the "Promotion of the Rule of Law and
              Civic Education in Malawi" project.
              <br />
              <br />The project is managed by a Project Management Unit – PMU
              under the supervision of the Ministry of Finance (National
              Authorizing Officer Support Unit). A Project Steering Committee
              coordinated by the Ministry of Justice provides policy guidance
              for the implementation of programmes.
              <br />
              <br />
              <strong>Why It Was Started</strong>
              <br />
              <br />The starting point for establishing the National Initiative
              for Civic Education was a general understanding – confirmed by
              findings from scientific reports – that the 1999 general elections
              would face considerable challenges because democratic values,
              principles and processes were not sufficiently entrenched in
              Malawian society. It was therefore recommended to establish a
              project to deliver civic education (CE) on a permanent basis. This
              permanent character to CE was particularly stressed because the
              perceptions of most Malawians concerning leadership are mostly
              guided by long held cultural values (sometimes not compatible with
              universally accepted principles of good leadership), hence
              requiring a longer term intervention to improve levels of
              knowledge, attitude and behavior required for a proper functioning
              of a democratic system of government.
              <br />
              <br />
              <strong>Stages in the project’s development</strong>
              <br />
              <br />At its outset in February 1999 NICE worked in close
              partnership with the Public Affairs Committee (PAC) as PAC brought
              the necessary country-wide outreach structures required by a
              project like NICE. At the same time, the operational aspects of
              the project were managed under the guidance of the German
              Technical Cooperation (GTZ) and its Malawi-German Programme for
              Democracy and Decentralisation (MGPDD).
              <br />
              <br />In August 2003 NICE and PAC signed a memorandum of
              understanding in which both parties decided to cordially separate
              and focus in future on their own respective core issues. The
              trigger for such a move by NICE was its resolve to uphold its
              strict neutrality and non-partisanship in all matters of
              day-to-day politics in a political environment in Malawi that was
              at that time considerably charged. This move was therefore crucial
              to again assert NICE’s credibility as a non-partisan civic
              educator. NICE subsequently embarked on a strategy to create a
              robust physical outreach structure throughout the entire country.
              <br />
              <br />In July 2005 the GTZ management contract came to an end. As
              a consequence NICE was thereafter operating solely under a
              Malawian management. This stage was characterized by NICE
              strengthening its ties with numerous civil society and other
              partner organizations. This led to NICE today enjoying
              exceptionally high levels of legitimacy and representation
              throughout the country.
              <br />
              <br />
              <strong>Target group</strong>
              <br />
              <br />
              <img src="@/assets/img/dsc_0548.jpg" alt="Voting" lazyloading />
              <br />NICE targets all Malawians living in both urban and rural
              settings, while a special focus is put on including socially and
              economically disadvantaged groups. In addition to this, NICE works
              with duty bearers at various levels with the aim of enhancing
              accountability and transparency in the execution of their public
              duty. Civil society organizations and other multipliers form
              another tier of our target group. In this field we focus on
              increasing their capacity to deliver civic education messages in
              Malawi as well as enhancing coordination and cooperation among
              these actors.
              <br />
              <br />
              <strong>Activity types</strong>
              <br />
              <br />NICE implements a great variety of activities, grouped
              around our main thematic area of “Local Democracy”. The
              interventions take – among others - the form of meetings,
              trainings, rallies, procession walks, panel discussions,
              workshops, open days, production of IEC materials, facilitating
              the establishment of clubs, committees and support groups,
              information provision, debates, referral services, radio
              programmes etc. The variety of our activities and approaches stems
              from our strategy to deliver needs-based civic education. Through
              implementing such activities, NICE prides itself on being experts
              in facilitating processes that lead to informed, capacitated and
              empowered communities that constructively engage duty bearers for
              the betterment of the Malawian society.
              <br />
              <br />
              <img
                src="@/assets/img/Participants-of-Peacebuilding-meertings-hold-hands-in-solidarity-during--the-sensitisation-campaign.jpg"
                alt
                lazyloading
              />
              <br />
              <br />
              <b>Core Competencies:</b>
              <br />
              <br />NICE delivers relevant and results based Civic Education
              service design and delivery in a practical and participatory
              manner. This is achieved through building and use of core
              competences which include: Countrywide physical presence- Civic
              Education infrastructure across the country with proactive citizen
              forums, and strong volunteer-base; Participatory ,Innovative and
              transformative Civic & voter Education Programming; Strong
              Strategic partnerships, networks, collaboration, and connection
              with citizens and masses; Robust Governance structure and
              responsive leadership; Strong systems with robust transparency and
              accountability mechanisms; Highly qualified staff in management,
              Development, Finance, Civic Education; Evidence generation and use
              for informed CE; Performance monitoring, Evaluation, Impact and
              learning Systems.
              <br />
              <br />
            </p>
            <hr style="width:50%" />
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
// .text {
//   text-justify: inter-word;
//   text-align: justify;
//   color: black;
// }

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
