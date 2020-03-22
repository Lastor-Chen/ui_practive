<template>
  <div class="wrapper">
    <div class="bg position-relative">
      <div class="container position-relative">
        <div class="row align-items-end justify-content-between">
          <div class="man-img d-none d-lg-block">
            <img src="https://colorlib.com/preview/theme/estore/assets/img/categori/card-man.png">
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
        <img src="https://colorlib.com/preview/theme/estore/assets/img/categori/card-shape.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  padding: 10rem 2.5rem;
  font-family: poppins, sans-serif;
}

.bg {
  background: url(https://colorlib.com/preview/theme/estore/assets/img/categori/card.png) no-repeat;
  background-position: right;
  background-size: cover;
}

.man-img {
  position: absolute;
  left: 9%;
  bottom: 0;
  z-index: 1;
}

.clothes-img {
  position: absolute;
  right: 6%;
  bottom: 15%;
}

.jump-animate {
  animation: {
    name: jump;
    duration: 2s;
    iteration-count: infinite;
  }
}

.effect-text span {
  font-size: 7.3rem;
  text-transform: uppercase;
  font-weight: bold;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: rgba(231, 220, 198, 1) 1px;
}

.desc-area {
  padding: 10rem 0;
  h2 {
    font-family: playfair display, serif;
    font-size: 2.85rem;
    font-weight: bold;
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

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>