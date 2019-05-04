import { T9n } from 'meteor-accounts-t9n/build/t9n.js'
import { defaultCipherList } from 'constants';

T9n.map('en', {
    'Current locale': 'Current locale',
    'Welcome to Your Vue.js App': 'Welcome to Your Vue.js App!',
})

T9n.map('es', {
    'Current locale': 'Idioma actual',
    'Welcome to Your Vue.js App': '¡Bienvenidos en tu Vue.js App!',
})

T9n.map('de', {
    'Current locale': 'Aktuelle Sprache',
    'Welcome to Your Vue.js App': 'Deine eigene kleine Vue.js App heißt Dich Willkommen!',
})

export default T9n
