import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserDetail } from '../model/user.model';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {


  constructor(private router: Router, private route: ActivatedRoute,
    private readonly userService: UserService, private datePipe : DatePipe) { }

declare us : User;

user: any
idFromParams: string = ''

ngOnInit(): void {
  console.log("par: ", this.route.params);
  
  if(Object.keys(this.route.params).length){
  this.route.params.subscribe((params) => {
    console.log('PARAMS: ', params);
    this.userService.getUserById(params['id']).subscribe((res) => {
      console.log("RESPONSE", res);
      this.user = res
      if(res){
        this.setFormGroup()
      }
    })
  })
}
}

  registerForm: FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    userDetail : new FormGroup({
      id : new FormControl(''),
      nik : new FormControl('', [Validators.required]),
      fullName : new FormControl('', [Validators.required]),
      birthPlace : new FormControl('', [Validators.required]),
      birthDate : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      districts: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      religion: new FormControl('', [Validators.required]),
      otherInformation: new FormControl('', [Validators.required]),
    })
  })

  register(params: User){
    if(!this.user){
    console.log("PARAMETER : ",params); 
    params.userDetail.id = undefined
    this.userService.register(params).subscribe((res: any) => {
      this.router.navigateByUrl('/pages/user-list')
    }
    )
  }else{
    console.log("Params form com:", params.userDetail);
    
    this.userService.updateUser(params.userDetail).subscribe((res) => {
      this.router.navigateByUrl('/pages/user-list')
    })
  }
  }


  setFormGroup(){
    this.registerForm.get('userDetail')?.patchValue({id : this.user.id})
    this.registerForm.get('userDetail')?.patchValue({nik : this.user.nik})
    this.registerForm.get('userDetail')?.patchValue({fullName : this.user.fullName})
    this.registerForm.get('userDetail')?.patchValue({phoneNumber : this.user.phoneNumber})
    this.registerForm.get('userDetail')?.patchValue({email : this.user.email})    
    this.registerForm.get('userDetail')?.patchValue({religion : this.user.religion})  
    this.registerForm.get('userDetail')?.patchValue({gender : this.user.gender})  
    this.registerForm.get('userDetail')?.patchValue({birthDate : this.datePipe.transform(this.user.birthDate, 'yyyy-MM-dd')})
    this.registerForm.get('userDetail')?.patchValue({birthPlace : this.user.birthPlace})
    this.registerForm.get('userDetail')?.patchValue({address : this.user.address}) 
    this.registerForm.get('userDetail')?.patchValue({education : this.user.education}) 
    this.registerForm.get('userDetail')?.patchValue({otherInformation : this.user.otherInformation})
  }



}
