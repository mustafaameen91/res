<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/experience">Experince</router-link>|
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

$textColor:#F1FAEE;
$backgroundColor:#1aaab9;
$BGhover:#036c77;
$Fsize:15px;


body{
  margin: 0;
  background-image: url('./assets/me.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
  height: 100vh;
   background-color: rgba(0,0,0,0.7);
  //background: radial-gradient(#011627, #09203f);
  display: grid;
  grid-template-columns: 10% auto;
  grid-gap: 10px;
}
#nav {
  display: grid;
  grid-template-rows: auto auto auto auto;
  align-content: center;
  grid-column-gap: 50px;
  padding: 15px;
  a {
    text-decoration: none;
    color: $textColor;
    box-shadow: 0px 1px 10px $textColor;
    font-weight: bold;
    background-color: $backgroundColor;
    border: 1px solid $backgroundColor;
    padding: 15px;
    border-radius: 30px;
    transition: all .5s;
    &.router-link-exact-active {
      color: #172826;
    }
    &:hover{
      background-color: $BGhover
    }
  }
}
</style>
