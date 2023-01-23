import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from 'src/app/api/reimbursement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  rows: any;

  constructor(private reimbursementService: ReimbursementService) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.reimbursementService.getAllSubmissions().subscribe(
      (response: any) => {
        // console.log(response.data);
        this.rows = response.data;
      }
    )
  }

}
