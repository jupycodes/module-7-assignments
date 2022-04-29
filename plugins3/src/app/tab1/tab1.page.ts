import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imageURL;
  cameraOptions: CameraOptions ={
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    saveToPhotoAlbum: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(private camera: Camera) {}

  takePicture() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      alert(imageData)
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageURL = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

  

}
