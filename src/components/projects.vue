<template>
  <div class="projects">
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$textColor:#F1FAEE;
$backgroundColor:#1aaab9;
$BGhover:#A91628;
$Fsize:15px;

.projects{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  align-content: center;
  justify-content: center;
  grid-gap: 10px;
}
.projects > div{
  width: 100%;
  height: 300px;
  background-color: $textColor
}
</style>
