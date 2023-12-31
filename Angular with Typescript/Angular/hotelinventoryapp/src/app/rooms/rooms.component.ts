import { AfterViewInit, Component, DoCheck, ViewChild, AfterViewChecked, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { count } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton Hotle using Interpolation syntax';
  numberOfRooms = 10;
  hideRooms = false;
  hideJsonPipe = true;
  title = 'Room List';

  selectedRoom!: RoomList;

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  //roomList: RoomList[] =
  //  [
  //    {
  //      roomNumber:1,
  //      roomType: 'Deluxe Room',
  //      amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
  //      price: 500,
  //      photos: '',
  //      checkInTime: new Date(),
  //      checkOutTime: new Date('October-29-2023'),
  //      rating:4.5,
  //    },
  //    {
  //      roomNumber:2,
  //      roomType: 'Deluxe Room',
  //      amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
  //      price: 1000,
  //      photos: '',
  //      checkInTime: new Date(),
  //      checkOutTime: new Date('October-29-2023'),
  //      rating:3.45656,
  //    },
  //    {
  //      roomNumber:3,
  //      roomType: 'Private Suite',
  //      amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
  //      price: 15000,
  //      photos: '',
  //      checkInTime: new Date(),
  //      checkOutTime: new Date('October-29-2023'),
  //      rating:2.4,
  //    },
  //  ];


  //Lifecycle Hooks ngOnInit
  //Input() from Rooms(Parent) to Roomlist(Child)
  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomServices: RoomsService){

  }

  ngOnInit(): void {
    //console.log(this.headerComponent);
    this.roomList = this.roomServices.getRooms();
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Rooms View Last using ViewChildren";
  }

  ngAfterViewChecked() {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  togglehideJsonPipe() {
    this.hideJsonPipe = !this.hideJsonPipe;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  lastcount: number = 3;
  addRoom() {
    this.lastcount += 1;
    const room: RoomList = {
      roomNumber: this.lastcount,
      roomType: 'Deluxe Room',
      amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
      price: 20000,
      photos: '',
      checkInTime: new Date(),
      checkOutTime: new Date('October-29-2023'),
      rating: 4.5,
    }
    //this.roomList.push(room); // this will not work when this 'changeDetection:ChangeDetectionStrategy.OnPush' is declared on child component.ts
    //...this.roomList(keep the existing data),room(add new record) : this will work when this 'changeDetection:ChangeDetectionStrategy.OnPush' is declared on child component.ts
    //(...)spread operator
    this.roomList = [...this.roomList, room]
  }

}
