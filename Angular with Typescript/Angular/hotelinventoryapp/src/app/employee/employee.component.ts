import { Component , Self} from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomsService]
})
export class EmployeeComponent {

 employeeName : string ="John";

constructor(@Self() private roomsServices : RoomsService){}

}
