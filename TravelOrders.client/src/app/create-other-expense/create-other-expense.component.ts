import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material } from '../app.material';
import { Output, EventEmitter } from '@angular/core';
import { OtherExpense } from '../models/other-expense.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-other-expense',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Material
  ],
  templateUrl: './create-other-expense.component.html',
  styleUrl: './create-other-expense.component.css'
})
export class CreateOtherExpenseComponent {
  fileName = '';
  description !: string  | null;
  amount !: number | null;
  image !: File;
  imgUrl !: string  | null;
  kilometrage !: number;
  
  @Output() newOtherExpense = new EventEmitter<OtherExpense>();


  onFileSelected(event : any) {
      this.image = event.target.files[0];
      this.imgUrl = URL.createObjectURL(this.image);
      this.fileName = this.image.name;
  }
  addOtherExpense() {
    if(this.description && this.amount) {
      let otherExpense = new OtherExpense(this.description,this.amount,this.image);
      this.newOtherExpense.emit(otherExpense);
    }
    this.description = null;
    this.amount = null;
    this.imgUrl = null;
    this.fileName = "";
  }
}
