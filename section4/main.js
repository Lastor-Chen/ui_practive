// 參考: https://colorlib.com/preview/theme/aznews/

// Sass setup
const sass = new Sass()
httpVueLoader.langProcessor.scss = function (scssText) {
  return new Promise(function (resolve, reject) {
    sass.compile(scssText, function (result) {
      if (result.status === 0)
        resolve(result.text)
      else
        reject(result)
    })
  })
}

new Vue({
  el: '#app',
  components: {
    App: httpVueLoader('./App.vue')
  }
})