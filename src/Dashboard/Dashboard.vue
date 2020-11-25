<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item"></div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Dashboard</h2>
          </div>
          <div>
            <md-button class="md-accent md-large md-raised" href="/list"
              ><i class="material-icons">mark_email_read</i>Mail</md-button
            >
          </div>
          <br />
          <h3 class="text-center">
            <b>Staff Memeber Contact Details </b>
          </h3>
          <table>
            <tr>
              <th>NAME</th>
              <th>POSITION</th>
              <th>CELLPHONE NO.</th>
              <th>EMAIL ADDRESS</th>
              <th>ACTION</th>
            </tr>
            <tr v-for="staff in staffs" :key="staff.key">
              <td>{{ staff.name }}</td>
              <td>{{ staff.position }}</td>
              <td>{{ staff.number }}</td>
              <td>{{ staff.email }}</td>
              <td><md-button
                  :to="'/editstaff/' + staff.key"
                  class="btn btn-danger"
                  >Edit</md-button
                >
                <md-button
                  @click.prevent="deleteStaff(staff.key)"
                  class="btn btn-danger"
                  >Delete</md-button
                ></td>
            </tr>
          </table>

          <br />
          <hr style="width:50%" />

          <h3 class="text-center">
            <b>District Contact Details </b>
          </h3>
          <table>
            <tr>
              <th>DISTRICT</th>
              <th>DISTRICT CIVIC ED. OFFICER</th>
              <th>ASSISTANT DCEO</th>
              <th>TELEPHONE</th>
              <th>EMAIL</th>
              <th>ACTION</th>
            </tr>
            <tr v-for="district in districts" :key="district.key">
              <td>{{ district.name }}</td>
              <td>{{ district.officer }}</td>
              <td>{{ district.dceo }}</td>
              <td>{{ district.tel }}</td>
              <td>{{ district.email }}</td>
              <td><md-button
                  :to="'/editdistrict/' + district.key"
                  class="btn btn-danger"
                  >Edit</md-button
                >
                <md-button
                  @click.prevent="deleteDistrict(district.key)"
                  class="btn btn-danger"
                  >Delete</md-button
                ></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebaseInit";

export default {
  components: {},
  name: "dashboard",
  bodyClass: "dashboard",
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
  data() {
    return {
      staffs: [],
      districts: [],
    };
  },
  created() {
    db.collection("staffs")
      .orderBy("name")
      .onSnapshot((snapshotChange) => {
        this.staffs = [];
        snapshotChange.forEach((doc) => {
          this.staffs.push({
            key: doc.id,
            name: doc.data().name,
            position: doc.data().position,
            number: doc.data().number,
            email: doc.data().email,
          });
        });
      });
    db.collection("districts")
      .orderBy("name")
      .onSnapshot((snapshotChange) => {
        this.districts = [];
        snapshotChange.forEach((doc) => {
          this.districts.push({
            key: doc.id,
            name: doc.data().name,
            officer: doc.data().officer,
            dceo: doc.data().dceo,
            tel: doc.data().tel,
            email: doc.data().email,
          });
        });
      });
  },
  methods: {
    deleteStaff(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("staffs")
          .doc(id)
          .delete()
          .then(() => {
            
          })
          .catch(error => {
            
          });
      }
    },
    deleteDistrict(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("districts")
          .doc(id)
          .delete()
          .then(() => {
            
          })
          .catch(error => {
            
          });
      }
    }
  }
};
</script>

<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
.md-rose {
  margin-right: 12px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.text {
  text-justify: inter-word;
  text-align: justify;
  color: black;
}
</style>
