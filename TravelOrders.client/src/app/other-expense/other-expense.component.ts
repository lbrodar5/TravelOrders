import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherExpense } from '../models/other-expense.model';
import { Material } from '../app.material';

@Component({
  selector: 'app-other-expense',
  standalone: true,
  imports: [CommonModule, Material],
  templateUrl: './other-expense.component.html',
  styleUrl: './other-expense.component.css'
})
export class OtherExpenseComponent implements OnInit{
  @Input() otherExpense !: OtherExpense;
  imgUrl !: string;
  ngOnInit(): void {
    this.imgUrl = URL.createObjectURL(this.otherExpense.image);
  }

}
