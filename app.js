const app = Vue.createApp({
    data() {
        return {
            firstName : "Paras" , 
            lastName : "Nagpal"  ,
            email : "paras.nagpal743@gmail.com" , 
            gender : "male" , 
            picture : "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods : {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();
            console.log(results[0]); 
            this.firstName = results[0].name.first || "Random" , 
            this.lastName = results[0].name.last || "Girl"  ,
            this.email = results[0].email || "randomgirl@gmail.com" , 
            this.gender = results[0].gender || "female" , 
            this.picture = results[0].picture.large || "https://randomuser.me/api/portraits/women/10.jpg"

        }
    }
})

app.mount('#app');