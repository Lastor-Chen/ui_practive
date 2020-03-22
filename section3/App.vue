<template>
  <div class="wrapper">
    <div class="bg position-relative">
      <div class="container position-relative">
        <div class="row align-items-end justify-content-between">
          <div class="man-img d-none d-lg-block">
            <img :src="manImg">
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <div class="effect-text">
              <span>manz</span>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="desc-area">
              <h2 class="mb-3">
                <span>Find The Base Product</span>
                <br>
                <span>from Our Shop</span>
              </h2>
              <p class="mb-5">Designers who are interesten creating state ofthe.</p>
              <a href="#" class="shop-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="clothes-img jump-animate">
        <img :src="clothesImg">
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      manImg: 'https://colorlib.com/preview/theme/estore/assets/img/categori/card-man.png',
      clothesImg: 'https://colorlib.com/preview/theme/estore/assets/img/categori/card-shape.png'
    }
  }
}
</script>

<style lang="scss">
$bg: 'https://colorlib.com/preview/theme/estore/assets/img/categori/card.png';
$font-title: playfair display, serif;
$font-normal: poppins, sans-serif;

@mixin bg-set($repeat, $position, $size) {
  background: {
    image: url($bg);
    repeat: $repeat;
    position: $position;
    size: $size;
  }
}

@mixin position-ctrl($pos, $top, $right, $bottom, $left) {
  position: $pos;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
}

.wrapper {
  padding: 10rem 2.5rem;
  font-family: $font-normal;
  .bg {
    @include bg-set(no-repeat, right, cover)
  }
  .man-img {
    @include position-ctrl(absolute, null, null, 0, 9%);
    z-index: 1;
  }
  .clothes-img {
    @include position-ctrl(absolute, null, 6%, 15%, null);
  }
  .jump-animate {
    animation: {
      name: jump;
      duration: 2s;
      iteration-count: infinite;
    }
  }
  .effect-text {
    span {
      font-size: 7.3rem;
      font-weight: bold;
      text-transform: uppercase;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: rgba(231, 220, 198, 1) 1px;
    }
  }
  .desc-area {
    padding: 10rem 0;
    h2 {
      font: {
        family: $font-title;
        size: 2.85rem;
        weight: bold;
      }
    }
    p {
      font-size: 1.2rem;
    }
    .shop-btn {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: #000;
      padding: .85rem 3rem;
      border: 1px solid #000;
      border-radius: 2.5rem;
      box-shadow: 0 10px 30px 0px rgb(191, 181, 153);
      transition: transform .3s ease-out;
      &:focus, &:hover {
        text-decoration: none;
      }
      &:hover {
        transform: translateY(-10px)
      }
    }
  }
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>