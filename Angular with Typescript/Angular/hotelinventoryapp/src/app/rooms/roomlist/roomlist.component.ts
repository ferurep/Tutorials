import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomlistComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';

  //Output from Roomlist(Child) to Rooms(Parent)
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {

  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
