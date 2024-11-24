/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-10-18 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


import { Component, ElementRef, OnInit } from '@angular/core';

import { StencilService } from '../services/stencil-service';
import { ToolbarService } from '../services/toolbar-service';
import { InspectorService } from '../services/inspector-service';
import { HaloService } from '../services/halo-service';
import { KeyboardService } from '../services/keyboard-service';
import RappidService from '../services/kitchensink-service';

import { ThemePicker } from '../components/theme-picker';
import { sampleGraphs } from '../config/sample-graphs';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    private rappid: RappidService;
    private http : HttpClient
    constructor(private element: ElementRef ) {

    }

    ngOnInit() {

        this.rappid = new RappidService(
            this.element.nativeElement,
            new StencilService(),
            new ToolbarService(),
            new InspectorService(),
            new HaloService(),
            new KeyboardService()
        );
        this.rappid.startRappid();

        const themePicker = new ThemePicker({ mainView: this.rappid });
        document.body.appendChild(themePicker.render().el);

       // this.rappid.graph.fromJSON(JSON.parse(sampleGraphs.emergencyProcedure));
    }
}
