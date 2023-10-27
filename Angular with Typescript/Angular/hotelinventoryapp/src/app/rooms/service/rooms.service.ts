import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
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


  constructor() { }

  getRooms() {
return this.roomList;
  }
}
