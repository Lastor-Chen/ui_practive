const dummyData = Array.from({ length: 3 }, () => (
  {
    image: 'https://via.placeholder.com/300x200',
    title: faker.lorem.sentence(),
    user: faker.name.findName(),
    createdAt: `${faker.date.month()} 10, 2020`
  }
))

const app = new Vue({
  el: '#app',
  data: {
    articles: []
  },
  created() {
    this.fetchArticles()
  },
  methods: {
    fetchArticles() {
      this.articles = dummyData
    }
  }
})