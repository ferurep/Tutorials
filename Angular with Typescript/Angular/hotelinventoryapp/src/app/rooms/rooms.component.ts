import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { RoomlistComponent } from './roomlist/roomlist.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotle using Interpolation syntax';
  numberOfRooms = 10;
  hideRooms = false;
  hideJsonPipe = true;

  selectedRoom!:RoomList;

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
  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 500,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date('October-29-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date('October-29-2023'),
        rating: 3.45656,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date('October-29-2023'),
        rating: 2.4,
      },
    ];
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  togglehideJsonPipe() {
    this.hideJsonPipe = !this.hideJsonPipe;
  }

selectRoom(room:RoomList){
  this.selectedRoom = room;
}

}
