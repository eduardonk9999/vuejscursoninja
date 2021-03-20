 const app = Vue.createApp({
   data() {
     return {
       title: 'The Final Empire',
       age: '29',
       showBooks: true,
       text: 'Lord of Rings',
       x: 0,
       y: 0
     }
   },
   methods: {
     changeTitle(title) {
      //this.title = 'Words of Randiance'
      this.title = title
     },
     toggleShowBooks() {
       this.showBooks = !this.showBooks
     },
     handleEvent() {
       console.log('event')
     },
     handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
     }
   }
 })

 app.mount('#app')