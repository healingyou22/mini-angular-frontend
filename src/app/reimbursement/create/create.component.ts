import { Component } from '@angular/core';

import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ReimbursementService } from 'src/app/api/reimbursement.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  reimbursementForm: FormGroup;

  constructor(private fb: FormBuilder, private reimbursementService: ReimbursementService) {
    this.reimbursementForm = this.fb.group({
      employee_id: '',
      submission_date: '',
      items: this.fb.array([])
    })
  }

  items(): FormArray {
    return this.reimbursementForm.get("items") as FormArray;
  }

  newItem(): FormGroup {
    return this.fb.group({
      item_name: '',
      item_date: '',
      item_nominal: ''
    });
  }

  addItem() {
    this.items().push(this.newItem());
  }

  removeItem(i: number) {
    this.items().removeAt(i);
  }

  onSubmit() {
    // console.log(this.reimbursementForm.value);
    this.reimbursementService.storeSubmission(this.reimbursementForm.value).subscribe();
  }

}
