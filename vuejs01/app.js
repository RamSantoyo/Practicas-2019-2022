const app = Vue.createApp({
    data() {
      return {
        imagen: 'recursos/1.jpg',          
        nombre: 'Carlos',
        apellido: 'Marcus',
        email: 'carlos@example.com',
        genero: 'male'
      }
    },

    methods: {
    async cambiaruser(){
            const res = await fetch('https://randomuser.me/api/');
            const { results } = await res.json()

            console.log(results[0])

           this.imagen = results[0].picture.large          
           this.nombre = results[0].name.first
           this.apellido = results[0].name.last
           this.email = results[0].email
           this.genero = results[0].gender
        }
    }
  })

  app.mount('#app');