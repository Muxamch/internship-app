import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

   
  constructor(private http: HttpClient) {
    
   }
   getStudents() {
    return this.http.get('/api/students/student').toPromise().then(data => data as Students[]);
  }

  addNewStudent(body: string) {
    return this.http.post('/api/students/add_new_student', body).toPromise();
  }

  editStudentById(editedBody: String) { //TODO JSON
    return this.http.post('/api/students/deleteById?id=', editedBody).toPromise();
  }

}
