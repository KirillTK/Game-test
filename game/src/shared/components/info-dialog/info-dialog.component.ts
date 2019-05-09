import { CharacterService } from './../../services/character/character.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  index = 0;
  height: string = '400px';
  userInfo: any;
  screenshots = [];

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>, private characher: CharacterService) { }

  ngOnInit() {
    this.userInfo = this.characher.getUserInfo();
    this.screenshots = [{url: this.userInfo.selectedHero.selectedCharacter.imgPath, caption: 'Привет храбрый путник! Ты новичок? Ничего я тебе счас все покажу'},
    {url: 'assets/screenshots/screen2.jpg', caption: 'Слева находится твоя навигация!'},
    {url: 'assets/screenshots/screen3.jpg', caption: 'Сверху находиться индикатор твоей и врага жизни'},
    {url: 'assets/screenshots/screen4.jpg', caption: 'В зависимости от типа заклинания, наносится определенный урон. Будь внимательным при выборе заклинания,'+
     'ведь если ты отвечаешь не правильно, твой противник будет тебя атаковать'},
    {url: 'assets/screenshots/screen5.jpg', caption: 'Твоя цель дойти до черного жуткого замка и победить жуткого троля. На твоем пути будет много трудностей. Удачи'}]
  }

}
