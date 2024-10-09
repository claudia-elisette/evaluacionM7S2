<template>
  <div>
    <div class="home">
      <h1>Categorías</h1>
      <h4>Número de albums: {{ totalAlbums }}</h4>
      <div class="btnGroup">
        <router-link to="/rap" class="link">
          <img src="../assets/rap.jpg" alt="">
          <span>{{ rapAlbums }}</span>
        </router-link>
        <router-link to="/pop" class="link">
          <img src="../assets/pop.png" alt="">
          <span>{{ popAlbums }}</span>
        </router-link>
        <router-link to="/rock" class="link">
          <img src="../assets/rock.png" alt="">
          <span>{{ rockAlbums }}</span>
        </router-link>
      </div>
    </div>
    <NewAlbum></NewAlbum>
  </div>
  
</template>

<script>
// @ is an alias to /src
import NewAlbum from '@/components/NewAlbum.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  computed:{
    ...mapGetters(['totalAlbums', 'rapAlbums', 'popAlbums','rockAlbums'])
  },
  components: {
    NewAlbum
  },
}
</script>
<style scoped>
  .home{
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.25rem;
  }
  h1{
    font-size: 1.5rem;
  }
  .btnGroup{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 30px;
  }
  .link{
    position: relative;
  }
  span{
    position: absolute;
    z-index: 1;
    right: 30px;
    bottom: 30px;
    padding: 10px;
    border-radius: 15px;
    background-color: white;
    color: black;
    font-size: 1.3rem;
    font-weight: 800;
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
