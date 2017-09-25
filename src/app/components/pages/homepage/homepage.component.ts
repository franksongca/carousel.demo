import { Component, OnInit } from '@angular/core';
import { CarouselOptions } from 'ng2-owl-carousel2';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  carouselOptions:CarouselOptions;
  carousel;


  constructor() {
    ConfigService.getConfig().subscribe(
      response => {
        this.carousel = response.carousel;
      },
      () => console.log('load config error occurs!')
    );

    this.carouselOptions = new CarouselOptions();

    this.carouselOptions.enableMouseScroll(true)
      .directionLeftToRight(true);

  }

  onItemSelect(carouselItem:any):void {
    //this carousel item can be used anywhere
  }

  ngOnInit() {
  }

}
