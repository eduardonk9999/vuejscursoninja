 const app = Vue.createApp({
   data() {
     return {
       title: 'The Final Empire',
       age: '29',
       showBooks: true,
       text: 'Lord of Rings'
     }
   },
   methods: {
     changeTitle(title) {
      //this.title = 'Words of Randiance'
      this.title = title
     },
     toggleShowBooks() {
       this.showBooks = !this.showBooks
     }
   }
 })

 app.mount('#app')