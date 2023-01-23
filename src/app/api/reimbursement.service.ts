import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost/mini-angular-project/mini-angular-backend/';

  getAllSubmissions() {
    return this.http.get(`${this.baseUrl}/reimbursement-index.php`);
  }

  storeSubmission(data: any) {
    return this.http.post(`${this.baseUrl}/reimbursement-store.php`, { data });
  }

  deleteSubmission(unicode: any) {

    unicode = unicode.trim();

    const options = unicode ?
      { params: new HttpParams().set('unicode', unicode) } : {};

    return this.http.delete(`${this.baseUrl}/reimbursement-delete.php`, options);
  }

  editSubmission(unicode: any) {
    unicode = unicode.trim();

    const options = unicode ?
      { params: new HttpParams().set('unicode', unicode) } : {};

    return this.http.get(`${this.baseUrl}/reimbursement-edit.php`, options);
  }
}
