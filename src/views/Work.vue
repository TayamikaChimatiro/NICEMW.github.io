<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
     
      <div class="section profile-content">
        <div class="container">
          <h1 class="h1">
            <b>Work</b>
          </h1>
          <div>
                <p class="text">
                  <strong>CLIENT & PARTNERS LIST:</strong>
                    <br />
                    <br />NICE has a proven track record of managing partnerships with donors, Government, Private Institutions, ING, NGOs, Media, and other Civil Society Organisations. Here is just a few of strategic ones:
                    <br />
                    <br />
                    <table id="t01">
                        <tr>
                            <th>Name of Institution </th>
                            <th>Nature of the institution</th>
                        </tr>
                        <tr>
                            <td>European Union</td>
                            <td>Development partner (Donor)</td>
                        </tr>
                        <tr>
                            <td>United nations Development programme (UNDP)</td>
                            <td>Government</td>
                        </tr>
                        <tr>
                            <td>Ministry of Civic Education, Culture and Community Development</td>
                            <td>Government</td>
                        </tr>
                        <tr>
                            <td>Ministry of Home Affairs & Internal Security</td>
                            <td>Government</td>
                        </tr>
                        <tr>
                            <td>Ministry of Local Government, and Rural Development</td>
                            <td>DGovernment</td>
                        </tr>
                        <tr>
                            <td>GIZ (Germany Government)</td>
                            <td>INGO</td>
                        </tr>
                        <tr>
                            <td>UN Women</td>
                            <td>Development Partner (Donor)</td>
                        </tr>
                        <tr>
                            <td>Water Aid International</td>
                            <td>INGO</td>
                        </tr>
                        <tr>
                            <td>Malawi Electoral Commission</td>
                            <td>Parastatal (Quasi Government)</td>
                        </tr>
                        <tr>
                            <td>United Purpose</td>
                            <td>INGO</td>
                        </tr>
                        <tr>
                            <td>Malawi Economic Justice Network </td>
                            <td>Civil Society</td>
                        </tr>
                        <tr>
                            <td>Malawi Institute of Education</td>
                            <td>Academia</td>
                        </tr>
                        <tr>
                            <td>University of Malawi (Chancellor College)</td>
                            <td>Academia</td>
                        </tr>
                    </table>
                </p>
                <hr style="width:50%">
                        <p class="text">
                          <b>QUALITY COMMITMENT</b>
                            <br><br>
                                Quality Management: NICE ensures that all its services are delivered in a professional manner, and quality standards are applied and adhered to every level of our service delivery model. 
                                  We do not compromise on standards in order to ensure that our clients get the agreed and expected quality of service. 
                                    This is why we have managed to build trust, respect, integrity and excellence over the years. 
                                  <br><br>
                                <b>CODE OF PRACTICE</b><br><br> 
                              NICE is committed towards ensuring that Malawi is a corrupt free society, and therefore subscribes to zero tolerance to corruption. 
                            We believe in gender equality and equal opportunities for all, and we ensure that women, youth, children, and people living with disabilities are at centre of our planning, programing and service delivery. 
                          We are particularly intolerant to any form of child abuse, violence against women and children, and any corrupt practices. 
                        </p>
            <hr style="width:50%">
             <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1999899.7857032057!2d33.32737734062503!3d-11.76122784818765!3m2!1i1024!2i768!4f13.1!2m1!1sNICE%20Office!5e0!3m2!1sen!2smw!4v1596455869698!5m2!1sen!2smw" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
      default: require("@/assets/img/new/118843859_2663794400556865_5045684288130955588_n.jpg")
    },
},
computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.h1 {
  color: black;
}
.map {
  display: flex;
  justify-content: center !important;
  height: 940px;
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
#t01 tr:nth-child(even) {
  background-color: #eee;
}
#t01 tr:nth-child(odd) {
 background-color: #fff;
}
#t01 th {
  background-color: black;
  color: white;
}
.text {
  text-justify: inter-word;
  text-align: justify;
  color: black;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  
}
.flex-container > div {
  margin: 50px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>

