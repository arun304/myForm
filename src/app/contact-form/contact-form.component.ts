import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {
   employeeForm:FormGroup;
   submitted=false;
   constructor(private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required]],
     
  });

    
  }

 
 onSubmit():
   void{
     console.log(this.employeeForm.value);

   }
    
  }
 

