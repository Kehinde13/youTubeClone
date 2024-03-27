import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { 
    faBars, 
    faUpload, 
    faMagnifyingGlass, 
    faBell, 
    faMicrophone, 
    faArrowLeft,
    faChevronLeft,
    faChevronRight

} 
from '@fortawesome/free-solid-svg-icons'

library.add(
    faYoutube, 
    faBars, 
    faUpload, 
    faMagnifyingGlass, 
    faBell, 
    faMicrophone, 
    faUser, 
    faChevronLeft,
    faChevronRight,
    faArrowLeft
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
