import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SnackBar } from './services/snack-bar.service';
import { WindowRef } from './window-ref.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatSnackBarModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { Notifications } from './services/notifications.service';
import { WebComponent } from './web/web.component';
import { PrintComponent } from './print/print.component';
import { HitWithTransferStateResolver } from './services/resolvers/hitWithTransferState.resolver';
import { HitWithoutTransferStateResolver } from './services/resolvers/hitWithoutTransferState.resolver';
import { ExampleApi } from './services/exampleApi.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { TypingAnimationModule } from 'angular-typing-animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { FormsModule }   from '@angular/forms';
// import { PrebootModule } from 'preboot';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        MenuComponent,
        WebComponent,
        PrintComponent
    ],
    imports: [
        MatButtonModule,
        MatSnackBarModule,
        MatMenuModule,
        TranslateModule.forChild(),
        CommonModule,
        BrowserModule,
        TypingAnimationModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatListModule,
        FormsModule,
        NgxSmartModalModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, data: {title: 'Home', description: 'Homepage - quick overview.'}},
            { path: 'web', component: WebComponent, data: {title: 'Web', description: 'Examples of web and UX/UI design.'}},
            { path: 'print', component: PrintComponent, data: {title: 'Print', description: 'Examples of print design.'}},
            // { path: 'external', loadChildren: '@angular-universal-serverless/external-module/release#ExternalModule', data: {title: 'External module', description: 'External module example.'}}, not works because of https://github.com/angular/angular-cli/issues/8284
            { path: 'about', component: AboutComponent, data: {title: 'About', description: 'About Sarah and how to contact her.'}}
        ]),
        HttpClientModule
        // PrebootModule.withConfig({appRoot: 'app-root'})
      ],
      providers: [SnackBar, WindowRef, Notifications, HitWithTransferStateResolver, HitWithoutTransferStateResolver, ExampleApi, Title, Meta],
      bootstrap: [AppComponent]
})
export class AppModule { }
