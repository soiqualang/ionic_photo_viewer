import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private photoViewer: PhotoViewer
  ) {}

  
  viewPhoto(){
    this.photoViewer.show('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/168450824/original/8850f0bb8785789da92dbe732def0b346f2d3550/create-pokemon-maps-in-3rd-generation-style.png', 'My image title', {share: false, headers: '{username:foo,password:bar}'});
  }
}
