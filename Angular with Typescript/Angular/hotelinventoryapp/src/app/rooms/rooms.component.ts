import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotle using Interpolation syntax';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] =
    [
      {
        roomNumber:1,
        roomType: 'Deluxe Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 500,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date('October-29-2023')
      },
      {
        roomNumber:2,
        roomType: 'Deluxe Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date('October-29-2023')
      },
      {
        roomNumber:3,
        roomType: 'Private Suite',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: '',
        checkInTime: new Date(),
        checkOutTime: new Date('October-29-2023')
      },
    ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
