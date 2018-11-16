import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  // Entry form
  entryForm: FormGroup;
  returnAmount: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Private Key Form
    this.entryForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      percent: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  async goToList() {
    //Navigate to inside main
    this.router.navigate(['home']).catch(err => {
      console.log(err);
    });
  }

  async getReturnValue() {
    var amount = this.entryForm.get('amount').value;
    var percent = this.entryForm.get('percent').value;
    if (amount && percent) {
      this.returnAmount = amount * (percent / 100);
    } else {
      this.returnAmount = 0;
    }
  }
}
