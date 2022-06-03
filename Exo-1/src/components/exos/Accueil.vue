<script setup>
  import { useUserStore } from '@/services/userStore';

  const { user } = useUserStore();
</script>

<template>
    <h1>Accueil</h1>
    <button @click="user.nom='Taha2'">Changer Nom</button>
</template>

