<template>
  <div class="container py-5">
    <div class="row">
      <!-- 左半 -->
      <div class="col-8">
        <!-- 主塊 -->
        <div class="left-top-img mb-4">
          <img :src="articles[0].image">
          <div class="text-zone">
            <span class="tag" :class="`tag-${getTagColor(articles[0].tag)}`">
              {{articles[0].tag}}
            </span>
            <h3 class="mb-0 mt-3">{{articles[0].title}}</h3>
          </div>
        </div>
        <!-- 副塊 -->
        <div class="left-bottom">
          <div class="row">
            <div class="col-4"
                v-for="i in range(1, 3)"
                :key="articles[i].id"
              >
              <img class="mb-3" :src="articles[i].image">
              <span :class="`tag tag-${getTagColor(articles[i].tag)}`">
                {{articles[i].tag}}
              </span>
              <p class="mb-0 mt-3">{{articles[i].title}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 右半 -->
      <div class="col-4">
        <div class="right-card"
            v-for="i in range(4, 8)"
            :key="articles[i].id"
          >
          <div class="right-img">
            <img :src="articles[i].image">
          </div>
          <div class="right-content">
            <span :class="`tag tag-${getTagColor(articles[i].tag)}`">{{articles[i].tag}}</span>
            <p>{{articles[i].title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/trending_top.jpg',
    tag: 'Appetizers',
    title: 'Welcome To The Best Model Winner Contest At Look of the year'
  },
  {
    id: 2,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/trending_bottom1.jpg',
    tag: 'Lifestyple',
    title: 'Get the Illusion of Fuller Lashes by “Mascng.”'
  },
  {
    id: 3,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/trending_bottom2.jpg',
    tag: 'Sports',
    title: 'Get the Illusion of Fuller Lashes by “Mascng.”'
  },
  {
    id: 4,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/trending_bottom3.jpg',
    tag: 'Travels',
    title: 'Welcome To The Best Model Winner Contest'
  },
  {
    id: 5,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/right1.jpg',
    tag: 'Concert',
    title: 'Welcome To The Best Model Winner Contest'
  },
  {
    id: 6,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/right2.jpg',
    tag: 'Sea Beach',
    title: 'Welcome To The Best Model Winner Contest'
  },
  {
    id: 7,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/right3.jpg',
    tag: 'Bike Show',
    title: 'Welcome To The Best Model Winner Contest'
  },
  {
    id: 8,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/right4.jpg',
    tag: 'Sea Beach',
    title: 'Welcome To The Best Model Winner Contest'
  },
  {
    id: 9,
    image: 'https://colorlib.com/preview/theme/aznews/assets/img/trending/right5.jpg',
    tag: 'Skeping',
    title: 'Welcome To The Best Model Winner Contest'
  }
]

module.exports = {
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.articles = dummyData
    },
    getTagColor(tagName) {
      const map = {
        Appetizers: 'color1',
        Lifestyple: 'color2',
        Concert: 'color2',
        Skeping: 'color2',
        Sports: 'color3',
        'Bike Show': 'color3',
        Travels: 'color4',
        'Sea Beach': 'color4'
      }

      return map[tagName]
    },
    range(start, end) {
      return Array.from({ length: (end - start + 1) }, (_, index) => start + index)
    }
  }
}
</script>

<style lang="scss">
.tag {
  padding: 0.3rem 0.8rem;
  font-size: 0.7rem;
  font-weight: 400;
  text-transform: uppercase;

  &.tag-color1 {
    background: #fff9c6;
  }

  &.tag-color2 {
    background: #ffe7e6;
  }

  &.tag-color3 {
    background: #f4ffd5;
  }

  &.tag-color4 {
    background: #e1fcff;
  }
}

.left-top-img {
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, rgba(35, 57, 93, 0), rgba(35, 57, 93, 0.6));
  }

  img {
    width: 100%;
  }

  .text-zone {
    position: absolute;
    bottom: 1.6rem;
    left: 1.4rem;

    .tag {
      border-radius: 5px;
      font-weight: 500;
    }

    h3 {
      color: #fff;
      font-weight: bold;
      width: 80%;
      word-break: break-word;
    }
  }
}

.left-bottom {
  img {
    width: 100%;
  }

  p {
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.right-card {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  &:last-child {
    border-bottom: 0;
  }

  .right-img {
    min-width: 120px;

    img {
      width: 100%;
    }
  }

  .right-content {
    padding-left: .8rem;
  }
}
</style>