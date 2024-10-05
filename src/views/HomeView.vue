<template>
  <div class="home">
    <h1>Categorías</h1>
    <div class="btnGroup">
      <router-link to="/indie" tag="button">Indie</router-link>
      <router-link to="/pop" tag="button">Pop</router-link>
      <router-link to="/rock" tag="button">Rock</router-link>
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
    margin-top: 1.875rem;
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
    column-gap: 15px;
  }
  button{
    width: 30%;
    max-width: 300px;
    min-width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
  }
</style>
