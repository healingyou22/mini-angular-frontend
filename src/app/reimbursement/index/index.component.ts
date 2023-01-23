import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ReimbursementService } from 'src/app/api/reimbursement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  rows: any;
  loadingIndicator = true;
  columns = [
    { name: 'Employee ID', prop: 'employee_id' },
    { name: 'Employee Name', prop: 'name' },
    { name: 'Submission Date', prop: 'submission_date' }
  ]
  ColumnMode = ColumnMode;

  constructor(private reimbursementService: ReimbursementService) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.reimbursementService.getAllSubmissions().subscribe(
      (response: any) => {
        // console.log(response.data);
        this.rows = response.data;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 1500);
      }
    )
  }

  edit(value: any) {
    console.log(value);
  }

  delete(value: any) {
    console.log(value);
  }

}
