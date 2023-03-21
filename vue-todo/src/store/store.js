import Vue from 'vue'
import Vuex from 'vuex'

import todoApp from './modules/todoApp'

//global한 
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});


// import * as getters from './getters'
// import * as mutations from './mutations'

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== '') {
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                     }
//                 }
//             }
//             return arr;
//         },
//     }
    
//     export const store = new Vuex.Store({
//         state: {
//             todoItems: storage.fetch(),
//         },
//         getters,
//         mutations,
//     });