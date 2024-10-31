import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideToastr } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

/*const firebaseConfig = {
  projectId:"tp2clinica",
  appId:"1:798331900574:web:9134b7ba2eb8310660618f",
  storageBucket:"tp2clinica.appspot.com",
  apiKey:"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",
  authDomain:"tp2clinica.firebaseapp.com",
  messagingSenderId:"798331900574"
};

initializeApp(firebaseConfig);*/


export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr({timeOut: 5000, preventDuplicates: true}),
    provideRouter(routes, withHashLocation()), 
    provideFirebaseApp(() => initializeApp({"projectId":"tp2clinica",
                                            "appId":"1:798331900574:web:9134b7ba2eb8310660618f",
                                            "storageBucket":"tp2clinica.appspot.com",
                                            //"locationId":"us-central",
                                            "apiKey":"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",
                                            "authDomain":"tp2clinica.firebaseapp.com",
                                            "messagingSenderId":"798331900574"})), 
    provideAuth(() => getAuth()), 
    provideFirebaseApp(() => initializeApp({"projectId":"tp2clinica",
                                            "appId":"1:798331900574:web:9134b7ba2eb8310660618f",
                                            "storageBucket":"tp2clinica.appspot.com",
                                            //"locationId":"us-central",
                                            "apiKey":"AIzaSyA3hUfi22aOY41bdma_O5BYUkchwNa6ScM",
                                            "authDomain":"tp2clinica.firebaseapp.com",
                                            "messagingSenderId":"798331900574"})),
    provideFirestore(() => getFirestore()),
    //agregado
    importProvidersFrom(
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule      
    )
  ]
};