import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = 'Marina';
  imageSrc : string = 'https://media.istockphoto.com/photos/mountain-peak-zugspitze-summer-day-at-lake-eibsee-near-garmisch-picture-id1042404662?k=20&m=1042404662&s=612x612&w=0&h=Bjb0K0_frNQp9RSSrcERDe_tkh8E3iBs5dGcIrApD4E='
  isDisabled : boolean = true;
  clickMe(){
    console.log('WELCOME FROM EVENT BINDING')
    this.isDisabled = this.isDisabled === true ? false : true;
  }

  handleChange(event){
    console.log(event)
  }

}
