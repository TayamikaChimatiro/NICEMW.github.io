<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container" style="overflow-x:auto;">
          <h1 class="text-center">
            <b>Meet the Team</b>
          </h1>
          <h3 class="text-center">
            <b>Staff Memeber Contact Details </b>
          </h3>
          <table>
            <tr>
              <th>NAME</th>
              <th>POSITION</th>
              <th>CELLPHONE NO.</th>
              <th>EMAIL ADDRESS</th>
            </tr>
            <tr v-for="staff in staffs" :key="staff.key">
              <td>{{ staff.name }}</td>
              <td>{{ staff.position }}</td>
              <td>{{ staff.number }}</td>
              <td>{{ staff.email }}</td>
            </tr>
          </table>

          <br />
          <hr style="width:50%" />

          <h3 class="text-center">
            <b>District Contact Details </b>
          </h3>
          <table >
            <tr>
              <th>DISTRICT</th>
              <th>DISTRICT CIVIC ED. OFFICER</th>
              <th>ASSISTANT DCEO</th>
              <th >TELEPHONE</th>
              <th>EMAIL</th>
            </tr>
            <tr v-for="district in districts" :key="district.key">
              <td>{{ district.name }}</td>
              <td>{{ district.officer }}</td>
              <td>{{ district.dceo }}</td>
              <td>{{ district.tel }}</td>
              <td>{{ district.email }}</td>
            </tr>
          </table>

          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebaseInit";

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
  },
  data() {
    return {
      staffs: [],
      districts: [],
      
    };
  },
  created() {
    db.collection("staffs").orderBy("name").onSnapshot(snapshotChange => {
      this.staffs = [];
      snapshotChange.forEach(doc => {
        this.staffs.push({
          key: doc.id,
          name: doc.data().name,
          position: doc.data().position,
          number: doc.data().number,
          email: doc.data().email
        });
      });
    });
    db.collection("districts").orderBy("name").onSnapshot(snapshotChange => {
      this.districts = [];
      snapshotChange.forEach(doc => {
        this.districts.push({
          key: doc.id,
          name: doc.data().name,
          officer: doc.data().officer,
          dceo: doc.data().dceo,
          tel: doc.data().tel,
          email: doc.data().email
        });
      });
    });
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

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>
