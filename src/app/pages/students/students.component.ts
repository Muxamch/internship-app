import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Students } from '../models/students';
import { HttpClient } from '@angular/common/http';

interface Student {
  id: number;
  name: string;
  groupId: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsList : Students[] = [];

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
    this.service.getStudents().then(data => {this.studentsList = data; console.log(this.studentsList); }
    );
  }

  editStudentById(data: String) { //TODO JSON
    // this.service.delete(id).then(data => console.log(data)
    // ).catch(e => this.service.getList().then(r => this.fruitList = r));
  }

  //TODO findStudentById(data : String){

  //}

}
