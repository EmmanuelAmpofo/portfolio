import { createApp } from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas, faEnvelope, faBars, faCaretRight, faGraduationCap, faUserTie} from '@fortawesome/free-solid-svg-icons'
import {fab, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router/index'

library.add(fas, faEnvelope, faBars, faCaretRight, faGraduationCap, faUserTie)
library.add(fab, faGithub, faLinkedinIn)



const app = createApp(App)
app.use(router)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
