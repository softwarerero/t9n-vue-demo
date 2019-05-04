import { T9n } from 'meteor-accounts-t9n/build/t9n.js'
import { defaultCipherList } from 'constants';

T9n.map('en', {
    'Current locale': 'Current locale',
    'Welcome to Your Vue.js App': 'Welcome to Your Vue.js App!',
    'sharedPhotos': `@{userName} @{photoCount -> 
        [0] hasn\'t added any photos yet
        1 added a new photo
        [2-4] added a few photos
        .* added $photoCount new photos
    }, @{sex -> 
        female she
        male he
        .* that user
    } also liked a comment on a post. $userName was the subject.`
})

T9n.map('es', {
    'Current locale': 'Idioma actual',
    'Welcome to Your Vue.js App': '¡Bienvenidos en tu Vue.js App!',
    'sharedPhotos': `@{userName} @{photoCount -> 
        [0] toavia no agregó fotos
        1 agregó una foto
        [2-4] agregó pocas fotos
        .* agregó $photoCount fotos
    }, @{sex -> 
        female ella
        male el
        .* el usuario
    } tambien le gustó un comentario en la publicación. $userName era el sujeto.`
})

T9n.map('de', {
    'Current locale': 'Aktuelle Sprache',
    'Welcome to Your Vue.js App': 'Deine eigene kleine Vue.js App heißt Dich Willkommen!',
    'sharedPhotos': `@{userName} @{photoCount -> 
        [0] hat noch kein Photo hochgeladen
        1 hat ein Photo hochgeladen
        [2-4] hat ein paar Photos hochgeladen
        .* hat $photoCount Photos hochgeladen
    }, @{sex -> 
        female sie
        male er
        .* dem Benutzer
    } gefiel ebenfalls ein Kommentar. $userName war der Benutzer.`

})

export default T9n
