import { Component, ViewEncapsulation } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { MdProgressBar } from '@angular2-material/progress-bar';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { PathsComponent } from './+paths';
import { AboutComponent } from './+about';
import { PathGraphComponent } from './+path-graph';


@Component({
  moduleId: module.id,
  selector: 'angularattack2016-mypath-app',
  templateUrl: 'angularattack2016-mypath.component.html',
  styleUrls: ['angularattack2016-mypath.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [MdIconRegistry, MdRadioDispatcher, ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None
})
@Routes([
  {path: '/paths', component: PathsComponent},
  {path: '/about', component: AboutComponent},
  {path: '/path-graph', component: PathGraphComponent}
])
export class Angularattack2016MypathAppComponent { }
