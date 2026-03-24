import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgFor, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.ratingMaxArray = this.ratingArray;
    this.lastRatingValue = this.ratingValue;
  }

  @Input({required: true}) ratingMax: number = 0;

  @Input({required: true}) ratingValue: number = 0;

  @Output() ratingValueChange = new EventEmitter<number>();

  ratingMaxArray: number[] = [];
  lastRatingValue: number = 0;

  get ratingArray(): number[] {
    return Array(this.ratingMax).fill(0).map((x, i) => i);
  }

  handleMouseOver(index: number): void {
    this.ratingValue = index + 1;
  }

  handleMouseLeave(): void {
    if (this.ratingValue !== this.lastRatingValue) {
      this.ratingValue = this.lastRatingValue;
    }
  }

  handleClick(index: number): void {
    this.ratingValue = index + 1;
    this.lastRatingValue = this.ratingValue;
    this.ratingValueChange.emit(this.ratingValue);
  }
}
