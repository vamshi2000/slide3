import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slideform',
  templateUrl: './slideform.component.html',
  styleUrls: ['./slideform.component.css']
})
export class SlideformComponent implements OnInit {

  constructor() { }
		isForm=false;
  ngOnInit() {
  }
  onShow(){
  	this.isForm=true;
  }
  onCollapse(){
  	this.isForm=false;
  }


  onExport(){

    var inputValue1 = (<HTMLInputElement>document.getElementById('firstName')).value;
     var inputValue2 = (<HTMLInputElement>document.getElementById('surName')).value;
      var inputValue3 = (<HTMLInputElement>document.getElementById('message')).value;
    console.log("FirstName is:"+inputValue1+ "  SurName is:" +inputValue2+ "  message is:" +inputValue3);
    if((<HTMLInputElement>document.getElementById('firstName')).value=null){
  		this.isForm=true;
  	}
  	this.isForm=false;
  	
  }

}
