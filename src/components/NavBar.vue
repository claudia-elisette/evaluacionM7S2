<template>
    <nav>
        <div>
            <RouterLink class="link" to="/">Open Music</RouterLink>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'nav-comp',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    nav{
        border: 2px solid gray;
        background-image: url("../assets/vinilo.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    div{
        
        text-align: end;
        padding: 40px 80px;
        
    }
    .link{
        font-size: 3rem;
        font-weight: 600;
        text-decoration: none;
        color: #979793;
        padding: 10px;
        border-radius: 5px;
    }
</style>