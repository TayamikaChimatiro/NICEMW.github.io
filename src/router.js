import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Contact from "./views/Contact.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Gallery from "./views/Gallery.vue";
import Dashboard from "./Dashboard/Dashboard.vue";
import CreateNews from "./Dashboard/CreateNews.vue";
import CreateEvent from './Dashboard/CreateEvent';
import Createstaff from './Dashboard/Createstaff';
import AddImage from './Dashboard/AddImage';
import About from "./views/About.vue";
import Structure from "./views/Structure.vue";
import Achievements from "./views/Achievements.vue";
import Press from './views/Press.vue';
import DashNavbar from './layout/DashNavbar.vue';
import Register from './views/Register.vue';
import News from './views/News.vue';
import New from './views/New.vue'
import Listnews from './Dashboard/Listnews.vue';
import ListDocument from './Dashboard/ListDocument.vue';
import listImages from './Dashboard/listImages.vue';
import Editnews from './Dashboard/Editnews.vue';
import EditStaff from './Dashboard/EditStaff.vue';
import EditDistrict from './Dashboard/EditDistrict.vue';
import Videos from './views/Videos.vue';
import Work from './views/Work.vue';
import Partners from './views/Partners.vue';
import Boardmembers from './views/Boardmembers.vue';
import Secretariat from './views/Secretariat.vue';
import Staff from './views/Staff.vue';
import List from './Dashboard/List.vue';
import Event from './views/Event.vue';
import AddEvent from './Dashboard/AddEvent.vue';
import addDocument from './Dashboard/addDocument.vue';
import EditEvent from './Dashboard/EditEvent.vue';
import NewsLetter from './views/NewsLetter.vue'
import Opportunity from './views/Opportunity.vue'
import CreateJob from './Dashboard/CreateJob.vue'
import { fb } from "./firebaseInit";
import 'firebase/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "Register",
      components: { default: Register, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/contact",
      name: "Contact",
      components: { default: Contact, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/partners",
      name: "Partners",
      components: { default: Partners, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/board",
      name: "Boardmembers",
      components: { default: Boardmembers, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/staff",
      name: "Staff",
      components: { default: Staff, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/secretariat",
      name: "Secretariat",
      components: { default: Secretariat, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/opportunity",
      name: "Opportunity",
      components: { default: Opportunity, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/newsletter",
      name: "NewsLetter",
      components: { default: NewsLetter, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/news",
      name: "News",
      components: { default: News, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/news/:id",
      name: "/New",
      components: { default: New, header: MainNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }                      
      }
    },
    {
      path: "/gallery",
      name: "gallery",
      components: { default: Gallery, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      components: { default: Dashboard, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createnews',
      name: 'CreateNews',
      components: { default: CreateNews, header: DashNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createstaff',
      name: 'Createstaff',
      components: { default: Createstaff, header: DashNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/listimages',
      name: 'listImagse',
      components: { default: listImages, header: DashNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/list',
      name: 'List',
      components: { default: List, header: DashNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/listdocument',
      name: 'ListDocument',
      components: { default: ListDocument, header: DashNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createevent',
      name: 'CreateEvent',
      components: { default: CreateEvent, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createjob',
      name: 'CreateJob',
      components: { default: CreateJob, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addevent',
      name: 'AddEvent',
      components: { default: AddEvent, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editevent/:id',
      name: 'EditEvent',
      components: { default: EditEvent, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editstaff/:id',
      name: 'EditStaff',
      components: { default: EditStaff, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editdistrict/:id',
      name: 'EditDistrict',
      components: { default: EditDistrict, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/listnews",
      name: "Listnews",
      components: { default: Listnews, header: DashNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/editnews/:id",
      name: "/Editnews",
      components: { default: Editnews, header: DashNavbar, footer: MainFooter, gallery: Gallery },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addimage',
      name: 'AddImage',
      components: { default: AddImage, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/adddocument',
      name: 'addDocument',
      components: { default: addDocument, header: DashNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/videos',
      name: 'Videos',
      components: { default: Videos, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: '/event',
      name: 'Event',
      components: { default: Event, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/about",
      name: "About",
      components: { default: About, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/structure",
      name: "Structure",
      components: { default: Structure, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/work",
      name: "Work",
      components: { default: Work, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/achievements",
      name: "Achievements",
      components: { default: Achievements, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/press",
      name: "Press",
      components: { default: Press, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  ],

});

//Nav Guard
router.beforeEach((to, from, next) => {
  // check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //check if NOT logged in
    if(!fb.auth().currentUser){
      //Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } 
      });
    } else {
      // Proceed to route
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    //check if logged in
    if(fb.auth().currentUser){
      //Go to login
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        } 
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
})

export default router