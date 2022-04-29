import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera, ImagePicker, Crop, File],
  bootstrap: [AppComponent],
})
export class AppModule {}
