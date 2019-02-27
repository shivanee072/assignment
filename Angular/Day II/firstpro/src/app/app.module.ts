import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from'@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TopicComponent } from './topic/topic.component';
import { ContactComponent } from './contact/contact.component';
import { HelloService } from 'src/app/hello/hello.service';
import { ContactService } from 'src/app/contact/contact.service';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes:Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'hello',component:HelloComponent},
  {path:'topic',component:TopicComponent},
  {path:'contact',component:ContactComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,HelloComponent, TopicComponent, ContactComponent, HomeComponent, PagenotfoundComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
