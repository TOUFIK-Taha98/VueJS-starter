<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '@/services/userStore';
    import { useRouter } from 'vue-router'
    const router = useRouter();
    
    const nom = ref('');
    const email = ref('')
    const { connexion } = useUserStore();
    const onSubmit = () =>{
        connexion({
            nom: nom.value,
            email: email.value
        })
        nom.value ='';
        email.value='';
        //this.$router.push('accueil');
        router.push({name:'accueil'})
    }
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="exampleInputNom" class="firl-label">Nom</label>
            <input type="text" class="form-control" id="exampleInputNom" placeholder="Nom" v-model="nom">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail" class="firl-label">Email</label>
            <input type="text" class="form-control" id="exampleEmail" placeholder="Email" v-model="email">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>