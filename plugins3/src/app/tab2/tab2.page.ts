import { Component } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Crop, CropOptions } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';


// this does not work

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  croppedImgUrl = "";
  loading = false;
  pickerOptions: ImagePickerOptions = {
    maximumImagesCount: 1,
    quality: 55,
  };
  cropOpt: CropOptions = {
    quality: 55
  }
  constructor(
    private imagePicker: ImagePicker,
    private crop: Crop,
    private file: File
  ) { }

  selectImage() {
    this.imagePicker.getPictures(this.pickerOptions).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageCropMethod(results[i]);
      }
    }, (error) => {
      alert(error);
    });
  }
  imageCropMethod(pathImage) {
    this.crop.crop(pathImage, this.cropOpt)
      .then(
        newPath => {
          this.croppedImg(newPath.split('?')[0])
        },
        error => {
          alert('Error in cropper' + error);
        }
      );
  }
  croppedImg(pathImage) {
    this.loading = true;
    var copyUrl = pathImage;
    var splitPath = copyUrl.split('/');
    var imgName = splitPath[splitPath.length - 1];
    var fileUrl = pathImage.split(imgName)[0];
    this.file.readAsDataURL(fileUrl, imgName).then(base64 => {
      this.croppedImgUrl = base64;
      this.loading = false;
    }, error => {
      alert(error);
      this.loading = false;
    });
  }
}
