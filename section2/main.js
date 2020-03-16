const Card = httpVueLoader('./components/Card.vue')
const Navbar = httpVueLoader('./components/Navbar.vue')
const Dashboard = httpVueLoader('./components/Dashboard.vue')

new Vue({
  el: '#app',
  components: {
    Card,
    Navbar,
    Dashboard
  }
})