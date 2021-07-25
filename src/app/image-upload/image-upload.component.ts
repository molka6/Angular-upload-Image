import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    avatar: new FormControl(null, [Validators.required]),
  });
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
  }
  elem;
  uploadFile(event) {
    this.elem = event.target;
    console.log(this.elem.files[0]);
    this.form.patchValue({
      avatar: this.elem.files[0]

    });
    this.form.get('avatar').updateValueAndValidity()
  }



  // submitForm() {
  //    console.log(this.form.value)
  //    console.log(this.form.get('name').value)
  //    var formData: any = new FormData();

  //     formData.append('file', this.elem.files[0]);
  //     formData.append('name', this.form.get('name').value);

  //     console.log(formData)
  //     this.http.post('http://127.0.0.1:8000/api/upload', formData).subscribe(
  //       (data) => {
  //         console.log(data);

  //       }
  //     );
  //   }


  // }

  // uploadFile(event) {
  //   const file = (event.target as HTMLInputElement).files[0];

  //   console.log(file.name);
  //   this.form.patchValue({
  //     avatar: file.name
  //   });
  //   this.form.get('avatar').updateValueAndValidity()
  // }



  submitForm() {
    console.log(this.form.value)
    var formData: any = new FormData();

    formData.append("file", this.elem.files[0]);
    formData.append("nom", this.form.get('nom').value);

    this.http.post('http://127.0.0.1:8000/api/upload', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )


  }


}
