import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { PathGraphComponent } from '../+path-graph';

@Component({
  moduleId: module.id,
  selector: 'app-paths',
  templateUrl: 'paths.component.html',
  styleUrls: ['paths.component.css'],
  directives: [MD_CARD_DIRECTIVES, ROUTER_DIRECTIVES, PathGraphComponent],
  providers: [ROUTER_PROVIDERS]
})
export class PathsComponent implements OnInit{

constructor(private http: Http) { }

ngOnInit() { 
this.getlink()
  }
private link: any[];

getlink() {
  return this.http.get("https://www.reddit.com/.json")
        .map( res => { return res.json(); })
        .subscribe(res => { this.link = res } );
  }

}
