<script setup>
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/services/userStore';

  const { user } = useUserStore();
  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('user');
  var u = JSON.parse(retrievedObject);
  if(u != null && u.nom != ''){
    user.value.nom = u.nom;
    user.value.email = u.email;
  }
  const deconnecter = ()=>{
    const { deconnexion } = useUserStore();
    deconnexion();
    const router = useRouter();
    router.push({name:'accueil'})
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink :to="{name:'accueil'}" class="link">Accueil</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name:'exo1'}" class="link">Exo1</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-bind:to="{name:'exo2'}" class="link">Exo2</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-bind:to="{name:'exo3'}" class="link">Exo3</RouterLink>
        </li>
        <li class="nav-item" v-if="user.nom != ''">
          <RouterLink v-bind:to="{name:'demojwt'}" class="link">Demo JWT</RouterLink>
        </li>
        <li class="nav-item" v-if="user.nom != ''">
          <RouterLink v-bind:to="{name:'demovfor'}" class="link">Demo VFor</RouterLink>
        </li>
        <li class="nav-item" v-if="user.nom == ''">
          <RouterLink v-bind:to="{name:'connexion'}" class="link">Connexion</RouterLink>
        </li>
        <li class="nav-item" v-if="user.nom != ''">
          <button class="link" @click="deconnecter">Déconnexion</button>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView/>
</template>

<style lang="scss">
  @import 'bootstrap/dist/css/bootstrap.min.css';
  .nav-item{
    margin-right: 0.4em;
    text-: none;
    color:red;
    .link{
      color:white;
      text-decoration: none;
    }
    .link:hover{
      color:orange;
    }
  }
</style>
