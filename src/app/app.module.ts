import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DxDataGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
