import { Component, OnInit, Inject } from '@angular/core';
import { animation, animate, trigger, state, style, transition, keyframes  } from '@angular/animations';
import {MatDialog, MatDialogRef} from '@angular/material';
declare var $ : any;

@Component({
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit{


  public webElements: WebElement[] = [
    {
      thumb: './assets/img/img1-thumb.png',
      asset: './assets/img/img1.png',
      title: 'Gunta Stölzl Poster Set',
      subheader: 'Adobe Photoshop, Illustrator, and InDesign',
      text: "I created several iterations of hand drawn sketches for each flyer before starting to work in Adobe Illustrator, Photoshop, and InDesign. These flyers are meant to illustrate different aspects of Gunta’s art, including her colorful woven pieces, her innovation at the Bauhaus School, and the scientific disoveries she made while experimenting with new ways to dye synthetc fabrics. The finished flyers ultimately used text art, collage, and photography to express her artistic legacy."
    },
    {
      thumb: './assets/img/img2-thumb.png',
      asset: './assets/img/img2.png',
      title: 'Community Preparedness Event Flyer',
      subheader: 'Adobe Illustrator',
      text: 'This flyer is meant to advertise a mult-organization, community-wide emergency preparedness event. The client, a local church, had very specific details and wording that had to be included. I worked with them to created several versions of this flyer until we landed on this final version, which they felt best expressed the services available in a way that would encourage community participation.'
    },
    {
      thumb: './assets/img/img3-thumb.png',
      asset: './assets/img/img3.png',
      title: 'Yuletide Mead Label',
      subheader: 'Krita, Adobe Illustrator',
      text: 'This project is a personal favorite of mine, and was done purely for fun. Last Christmas my fiancée and I brewed mead to give as gifts to our friends and family, and then worked together to create the label art. She drew the initial lineart in Krita, and I then turned it into a vector and gave it a linocut effect in Illustrator. After that I applied the text treatment and adjusted the colors to make it print ready.'
    },
    // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
    {
      thumb: './assets/img/img4-thumb.png',
      asset: './assets/img/img4.png',
      title: 'Smith Family Life-size Cutouts',
      subheader: 'Adobe Photoshop',
      text: 'These are two of several life-size cutouts I have made for the Sunstone Symposium. These two cutouts are now in use by the Community of Christ, as they depict historical Community of Christ leaders. To create them I worked with high resolution photography from the 19th century, color corrected and cleaned up the images, scaled them proportionately to standing adult humans, and masked and carefuly cut out the edges to create print ready files.'
    },
  ];

  start: boolean = false
  stringInterpolation: string = "Web"
  hideCursorOnComplete: boolean = true

  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
    /*{
      $(document).ready(function(){
      $('.modal').modal();
    });
  }*/
  }
  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }

  /*constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogImgDialog, {
      width: '85vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/

}

interface WebElement {
    thumb: string;
    asset: string;
    title: string;
    subheader: string;
    text: string;
  }

  /*@Component({
  selector: 'dialog-img',
  templateUrl: 'dialog-img.component.html',
})
export class DialogImgDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogImgDialog> {},

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
