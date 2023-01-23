import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ReimbursementService } from 'src/app/api/reimbursement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tData: boolean = false;

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
    this.tData = true;
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
    this.tData = true;
    this.reimbursementService.deleteSubmission(value).subscribe(
      (response: any) => {
        // console.log(response.data);
        if (response.data === 'success') {
          this.index();
        } else {
          console.log(response.data);
        }
      }
    );
  }

}
