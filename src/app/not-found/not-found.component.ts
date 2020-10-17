import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
errorMessage :string;
  constructor(private arRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.arRoute.data.subscribe(data=> {
  this.errorMessage=data.message;
}

)
  }

}
