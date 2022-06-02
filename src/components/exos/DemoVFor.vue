<script setup>
    import { ref } from 'vue';
    const newUser = ref({
        nom:'',
        prenom:''
    })
    
    const listeObjets = ref([
        {id: 0, nom:'Alice', prenom:'Benoit'},
        {id: 1, nom:'Bob', prenom:'Palace'},
        {id: 2, nom:'Charlie', prenom:'Tech'}
    ])

    const saveUser = () =>{
        listeObjets.value.push({id:listeObjets.value.at(-1).id+1 , nom: newUser.value.nom, prenom : newUser.value.prenom})
        newUser.value.nom="";
        newUser.value.prenom="";
    }
    const deleteUser = (user) => {
        listeObjets.value = listeObjets.value.filter(u => u.id != user.id)
    }
</script>

<template>
    <h2>Exo5 : V-FOR v-IF v-ELSE</h2>
    <ul>
        <li v-for="obj in listeObjets" :key="obj.id" @click="()=> deleteUser(obj)">
        {{obj.nom}} - {{ obj.prenom }}</li>
    </ul>
    <input type="text" v-model="newUser.nom"/>
    <input type="text" v-model="newUser.prenom"/>
    <button @click="saveUser">Save User</button>
    <hr/>
</template>