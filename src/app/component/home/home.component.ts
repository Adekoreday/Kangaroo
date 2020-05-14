import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {KangarooService} from '../../service/kangaroo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  result: string = "";

  constructor(private fb: FormBuilder, private router: Router, private kgservice: KangarooService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      x1: [0, [Validators.required, Validators.min(0), Validators.max(10000),  Validators.pattern("^[0-9]*$")]],
      v1: [0, [Validators.required, Validators.min(0), Validators.max(10000),  Validators.pattern("^[0-9]*$")]],
      x2: [0, [Validators.required, Validators.min(0), Validators.max(10000),  Validators.pattern("^[0-9]*$")]],
      v2: [0, [Validators.required, Validators.min(0), Validators.max(10000),  Validators.pattern("^[0-9]*$")]],
    });
  }
  get x1() {
    return this.myForm.get('x1');
  }

  get v1() {
    return this.myForm.get('v1');
  }

  get x2() {
    return this.myForm.get('x2');
  }
  get v2() {
    return this.myForm.get('c2');
  }
  submitHandler() {
    const {x1, v1, x2, v2} = this.myForm.value;
    this.result = this.kgservice.kangaroo(x1, v1, x2, v2);
    const resultStatus = this.result === "YES" ? 1 : 0;
    const date =this.kgservice.getDate();
    const fields = `${x1},${v1},${x2},${v2}`
    console.log(fields, 'this is the current date>>>');
    this.kgservice.saveToStorage(fields, resultStatus, date);
  }
}
