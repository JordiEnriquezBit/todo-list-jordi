import { AppMaterialModule } from './app.material.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import { ErrorComponent } from './components/error/error.component';
import { MessageComponent } from './components/error/message/message.component';
import { ListComponent } from './components/display/list/list.component';
import { CardComponent } from './components/display/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    ErrorComponent,
    MessageComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
