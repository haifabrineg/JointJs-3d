/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-10-18 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ThreeDDiagramComponent } from './three-ddiagram/three-ddiagram.component';
import {FormsModule} from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
    declarations: [
        AppComponent,
        ThreeDDiagramComponent,
        DataGridComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
