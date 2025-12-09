window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js').then(function (registration) {

            //sw OK
            console.log('ServiceWorker registrato correttamente con scope: ', registration.scope);
        },
            function (err) {

                //errore sw 
                console.log('ServiceWorker fallito: ', err);
            });
    }
}