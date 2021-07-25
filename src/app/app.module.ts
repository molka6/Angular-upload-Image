import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { AppareilComponent } from './appareil/appareil.component';
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

import { HttpClientModule } from '@angular/common/http';

import { ImageServiceService } from './image-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,

    AppareilComponent,
    PremierePageComponent,
    GalleryComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
