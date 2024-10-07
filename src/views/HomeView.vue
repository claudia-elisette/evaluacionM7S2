<template>
  <div class="home">
    <h1>Categorías</h1>
    <div class="btnGroup">
      <router-link to="/rap"><img src="../assets/rap.jpg" alt=""></router-link>
      <router-link to="/pop"><img src="../assets/pop.png" alt=""></router-link>
      <router-link to="/rock"><img src="../assets/rock.png" alt=""></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style scoped>
  .home{
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
  }
  h1{
    font-size: 1.5rem;
    margin: 0 auto;
  }
  .btnGroup{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 30px;
  }
  img{
    width: 300px;
    height: 300px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(50, 56, 56);
    color: white;
  }
  
</style>
