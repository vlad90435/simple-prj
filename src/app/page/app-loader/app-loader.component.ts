import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
})
export class AppLoaderComponent implements OnInit {
  constructor(private router: Router) {}
  @ViewChild('myButton', { static: false }) public myButton!: ElementRef;
  
  ngOnInit(): void {
    console.log('dd');
    setTimeout(() => {
      this.myButton.nativeElement.click()
    }, 2000);
  }
}
