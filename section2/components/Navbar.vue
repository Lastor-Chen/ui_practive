<template>
  <div class="card shadow-custom">
    <div class="card-img-top">
      <img src="https://via.placeholder.com/72" class="avatar">
    </div>
    <div class="card-body">
      <h5 class="card-title text-center">User</h5>
      <ul class="list-group pb-4">
        <li class="list-group-item"
          v-for="(item, index) in listA"
          :class="{ 'list-active': item.active }"
          :key="index + 'A'"
        >
          <a href="#" class="w-100">
            <span>{{item.name}}</span>
            <span class="counter">{{item.count}}</span>
          </a>
        </li>
        <hr>
        <li class="list-group-item"
          v-for="(item, index) in listB"
          :key="index + 'B'"
        >
          <a href="#" class="w-100">
            <span>{{item.name}}</span>
            <span class="counter">{{item.count}}</span>
          </a>
        </li>
        <hr>
        <li class="list-group-item">
          <a href="#" class="w-100">
            <span>listC</span>
            <span class="counter">0</span>
          </a>
        </li>
        <hr>
        <li class="list-group-item"
          v-for="(item, index) in listD"
          :key="index + 'D'"
        >
          <a href="#" class="w-100">
            <span>{{item.name}}</span>
            <span class="counter">{{item.count}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      listA: [
        { name: 'listA', count: '100%' },
        { name: 'listA', count: 1, active: true },
        { name: 'listA', count: 0 }
      ],
      listB: [
        { name: 'listB', count: 2 },
        { name: 'listB', count: 0 }
      ],
      listD: [
        { name: 'listD', count: 2 },
        { name: 'listD', count: 0 },
        { name: 'listD', count: 0 }
      ]
    }
  }
}
</script>

<style>
.avatar {
  width: 72px;
  height: 72px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -36px;
  border-radius: 50%;
}

.card-img-top {
  background-color: #eee;
  padding-bottom: 33.3%;
  position: relative;
}

.card-body {
  padding: 5rem 0 0 0;
}

.counter {
  color: #13ab67;
  float: right;
}

.list-group:after {
  clear: both;
}

.list-group-item {
  border: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.list-group-item:hover::before {
  content: '';
  width: .35rem;
  height: 30px;
  background-color: #13ab67;
  position: absolute;
  top: 5px;
}

.list-active::before {
  content: '';
  width: .35rem;
  height: 30px;
  background-color: #13ab67;
  position: absolute;
  top: 5px;
}

.list-group-item a {
  padding: .5rem 2rem;
  text-decoration: none;
  color: inherit;
}

hr {
  width: 100%;
}
</style>