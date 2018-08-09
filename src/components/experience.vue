<template>
  <div class="experience">
    <div class="works">
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div class="wrapper">
        <div class="works">
          <h3>Web Developer</h3>
          <h3>Freelancer November 2017 - Present</h3>
          <ul>
            <li v-for="task in freelancer">{{task}}</li>
          </ul>
        </div>

        <div class="works">
          <h3>Web Developer</h3>
          <h3>Freelancer November 2017 - Present</h3>
          <ul>
            <li v-for="task in options">{{task}}</li>
          </ul>
        </div>

      </div>

    </div>
    <div class="skills">

      <ul>
        <li v-for="skill in skills">{{skill}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    skills(){
      return this.$store.state.skills;
    },
    freelancer(){
      return this.$store.state.freelancer;
    },
    options(){
      return this.$store.state.options;
    }
  }
}
</script>

<style lang="scss" scoped>
$offWhite:#F1FAEE;
$primary:#1aaab9;
$secondry:#036c77;
$Fsize:15px;


.experience{
  display: grid;
  grid-template-columns: 87% 13%;
  align-content: center;

}

li{
  list-style: none;
}
.wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* or we can say grid-template-columns:repeat(2, 1fr)*/
}
.works{
  color: $offWhite;
}
.skills{
  display: grid;
  align-content: center;
}
.skills ul{
  display: grid;
  align-content: center;
  grid-template-rows: auto;
  grid-row-gap: 5px
}
.skills ul li{
  background-color: $primary;
  clip-path: polygon(15% 0%, 100% 1%, 100% 100%, 15% 100%, 0% 50%);
  padding: 5px;
  font-weight: bold;
  color: $offWhite;
  box-shadow: 0px 1px 10px $offWhite;
  transition: all .5s;
  &:hover{
    cursor: pointer;
    transform: translate(10px);
    background-color: $secondry
  }
}
</style>
