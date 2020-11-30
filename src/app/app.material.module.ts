import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

const array = [
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...array],
  exports: [...array],
})
export class AppMaterialModule {}
