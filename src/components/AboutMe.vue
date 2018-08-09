<template>
  <div class="hello">
      <transition name="left" mode="out-in" appear>
    <div class="aboutMe">

        <h2>ABOUT ME</h2>

      <p>{{me}}</p>
    </div>
    </transition>

      <!-- <div class="line"></div>

    <transition name="right" mode="out-in" appear>

      <div class="pic">
      </div>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data(){
    return{
    }
  },
  computed:{
    me(){
      return this.$store.state.me;
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$textColor:#F1FAEE;
$backgroundColor:#1aaab9;
$BGhover:#036c77;
$Fsize:15px;



.hello{
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  height: 100vh;
  grid-gap: 10px;
}
.aboutMe{
  height: 50vh
}
h2{
  opacity: 1;
}
p{
  width: 70%;
  margin: auto;
}
// .line{
//   background-color: $backgroundColor;
// }
// .pic{
//   background-image: url('../assets/mustafa.jpeg');
//   background-repeat: no-repeat;
//   background-position:top;
//   background-size: cover;
//   width: 90%
// }

.left-enter-active{
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.left-leave-active {
  transition: all 1s;
}
.left-enter, .left-leave-to{
  opacity: 0;
  transform: translateX(0px);
}

// .right-enter-active{
//   transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .right-leave-active {
//   transition: all 1s;
// }
// .right-enter, .right-leave-to{
//   opacity: 0;
//   transform: translateX(100px);
// }
</style>
