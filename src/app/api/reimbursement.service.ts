import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost/mini-angular-project/mini-angular-backend/';

  getAllSubmissions() {
    return this.http.get(`${this.baseUrl}/reimbursement-index.php`);
  }
}
