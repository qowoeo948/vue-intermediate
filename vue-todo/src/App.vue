<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput/>
    <!-- <TodoList v-bind:propsdata="todoItems" 
        v-on:removeItem="removeOneItem"
        v-on:toggleItem="toggleOneItem"/> -->
    <TodoList/>
   <!--  <TodoFooter v-on:clearAll='clearAllItem'/> -->
   <TodoFooter/>

   <DemoView/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

import DemoView from './components/DemoView.vue'

export default {
  /* data() {
    return {
      todoItems: [],
    }
  }, */
  methods: {  //mutations과 같다
    //addOnItem : funtion(todoItem) 과 같은거임
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item: todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //     localStorage.removeItem(todoItem.item);
    //     this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //  this.todoItems[index].completed = !this.todoItems[index].completed;

    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItem() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  // //시작되자마자 실행되는 인스턴스 : created
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== '') {
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }
  // },    store.js에서 fetch영역으로 이동됨
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    // 'TodoHeader': TodoHeader,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter,
    DemoView
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
