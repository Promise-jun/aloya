// loading 封装
import Vue from 'vue'

let loadBox
const load = {
    show() {
        loadBox = Vue.prototype.$loading();
    },
    hide() {
        loadBox.close();
    }
}

export default load;