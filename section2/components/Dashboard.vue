<template>
  <div class="dashboard shadow-custom">
    <div class="bg-white p-3">
      <h5>Title</h5>
      <div class="d-flex justify-content-between">
        <div>
          <a href="#">http://www.url.com/example</a>
          <button class="btn p-0">
            <i class="far fa-clone"></i>
          </button>
        </div>
        <div>created at 2020-03-15</div>
      </div>
    </div>
    <div class="toolbar p-3">
      <div class="row">
        <div class="toolbar-left col-md-9 mb-3 mb-md-0">
          <button class="btn btn-success">btn A</button>
          <button class="btn btn-default">btn B</button>
          <button class="btn btn-default">btn C</button>
          <button class="btn btn-default">btn D</button>
          <button class="btn btn-default">btn E</button>
        </div>
        <div class="toolbar-right col-md-3 text-md-right">
          <button class="btn btn-default">A</button>
          <button class="btn btn-default">B</button>
          <button class="btn btn-default">C</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  border: 1px solid #ddd;
}

.toolbar {
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.btn-default {
  color: #333;
  background-color: #e8e8e8;
}

.btn-default:hover {
  background-color: #c5c5c5;
  border-color: #c5c5c5;
}
</style>