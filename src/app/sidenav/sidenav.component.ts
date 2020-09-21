import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeatureService } from './feature.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  features: any[];
  @Output('output') feature_selected= new EventEmitter<string>()
  constructor(private service: FeatureService ) 
  {

  }
  ngOnInit(): void {
    this.features = this.service.getfeatures();
  }

 // showItem(item)
 showItem({title})
  {
    //console.log(title);
    this.feature_selected.emit(title);
  }
  

}
