import { ref } from "vue"

var user = ref({
    nom:'',
    email:''
})

function connexion(u){
    console.log('...');
    user.value.nom = u.nom;
    user.value.email = u.email;
    localStorage.setItem('user', JSON.stringify(user.value));
    console.log('connected successfully !');
    
}
function deconnexion(){
    console.log('...');
    user.value.nom='';
    user.value.email='';
    localStorage.removeItem('user');
}

export function useUserStore(){
    return{
        user,
        deconnexion,
        connexion
    }
}