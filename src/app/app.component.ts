import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from './api.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  dataArray: Data[];
  constructor(private apiService: ApiService, private ref: ChangeDetectorRef) {}

  details = false;
  currentUser;
  
  ngOnInit (): void {
    this.showData();
  }

  changePage = ($event: Event) => {
    // setTimeout(this.details = !this.details, 0);
    // this.ref.detectChanges();
    this.currentUser = $event;
  }

  showData = (): void => {
    this.apiService.getData()
      .subscribe(
        resArray => {
          return this.dataArray = resArray;
        },
        err => console.log(err)
      )
  }


}
