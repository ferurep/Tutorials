import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {
  @Input() rooms:RoomList[]=[];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {
    
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

}
