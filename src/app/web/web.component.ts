import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './web.component.html',
    styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit{
  public webElements: WebElement[] = [
    {
      asset: './assets/vid/CriticalOutlookvid.mp4',
      title: 'Critical Outlook',
      subheader: 'HTML5, SASS, Angular 6, MaterializeCSS',
      text: "This is a redesign of the previous Critical Outlook site for Critical Illness Awareness Month in October, 2018. As part of this project I completed a content audit on the available assets, reconfigured my original wireframe to accomodate and highlight new assets, integrated new copy and calls to action, and revamped the site's color scheme and images to meet the new brand standards.",
      link: "http://criticaloutlook.assurity.com",
      linkname: "Visit Critical Outlook"
    },
    {
      asset: './assets/vid/diquoter.mp4',
      title: 'Disability Income Quoter',
      subheader: 'HTML5, SASS, Angular 4, MaterializeCSS',
      text: 'I created the wireframing, layout, and much of the user interface for this disability income quoter, which has now become a repeatable web app template. It went through several iterations over a period of roughly six months, including user interface testing in various browsers. The form layouts and pagination kept the best practices of user experience research in mind.',
      link: "http://diquoter.assurity.com",
      linkname: "Visit DI Quoter"
    },
  ];
    public webElements2: WebElement2[] = [
    {
      asset: './assets/vid/annualreport.mp4',
      title: 'Annual Report 2017',
      subheader: 'HTML5, SASS, MaterializeCSS, ScrollMagic',
      text: 'This is a digital version of the printed 2017 Annual Report. To create this site I worked with the creative manager and copywriter to choose images and edit down the copy for the web. Next, I presented a sketch and a more detailed wireframe. Following that I perfected the smaller details like the slide movements and sent it to the marketing and sales teams for approval.',
      link: "http://annualreport17.assurity.com",
      linkname: "Visit Annual Report 2017"
    },
    // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
    {
      asset: './assets/vid/benefits.mp4',
      title: 'Worksite Benefits', subheader: 'HTML5, SASS, Angular 4, MaterializeCSS',
      text: 'After I created the initial wireframe for this site, another developer made a template out of it. I then updated the template for the purposes of this website, including laying out and creating new sections, altering user experience paths, and updating the responsiveness on mobile devices.',
      link: "http://benefits.assurity.com",
      linkname: "Visit Worksite Benefits"
    },
  ];
}

interface WebElement {
    asset: string;
    title: string;
    subheader: string;
    text: string;
    link: string;
    linkname: string;
  }

  interface WebElement2 {
    asset: string;
    title: string;
    subheader: string;
    text: string;
    link: string;
    linkname: string;
  }


}
