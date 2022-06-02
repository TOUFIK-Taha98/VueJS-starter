<script setup>
    import { ref } from 'vue';
    const newUser = ref('');
    const tableau = ref([1, 2, 3]);
    const listeObjets = ref([
        {id: 0, name:'Alice'},
        {id: 1, name:'Bob'},
        {id: 2, name:'Charlie'}
    ])

    const saveUser = () =>{
        listeObjets.value.push({id:10, name: newUser.value})
        newUser.value="";
    }
    const deleteUser = (user) => {
        console.log(user.id)
        listeObjets.value = listeObjets.value.filter(u => u.id != user.id)
    }
</script>

<template>
    <h2>Exo5 : V-FOR v-IF v-ELSE</h2>
    <ul>
        <li v-for="obj in listeObjets" :key="obj.id" @click="()=> deleteUser(obj)">{{obj.name}}</li>
    </ul>
    <input type="text" v-model="newUser"/>
    <button @click="saveUser">Save User</button>
    <hr/>
</template>