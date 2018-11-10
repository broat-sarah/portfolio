import { Component } from '@angular/core';

@Component({
    templateUrl: './web.component.html',
    styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit{
  public webElements: WebElement[] = [
    {asset: './assets/vid/CriticalOutlookvid.mp4', title: 'Critical Outlook', subheader: 'HTML5, SASS, Angular 6', text: "Lorem ipsum"},
    {asset: './assets/vid/CriticalOutlookvid.mp4', title: 'LIAM 2018', subheader: 'HTML5, SASS, Angular 6', text: 'Lorem ipsum'},
    ];
    public webElements2: WebElement2[] = [
    {asset: './assets/vid/CriticalOutlookvid.mp4', title: 'Annual Report 2017', subheader: 'HTML5, SASS, Angular 6', text: 'Lorem ipsum'},
    // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
    {asset: './assets/vid/CriticalOutlookvid.mp4', title: 'Worksite Benefits', subheader: 'HTML5, SASS, Angular 6', text: 'Lorem ipsum'},
  ];
}
