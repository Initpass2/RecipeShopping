import { Component, OnInit } from '@angular/core';
import { FeatureService } from './feature.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  features: any[];
  constructor(private service: FeatureService ) 
  {

  }
  ngOnInit(): void {
    this.features = this.service.getfeatures();
  }

}
