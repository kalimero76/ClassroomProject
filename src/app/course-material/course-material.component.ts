import { Component, Input } from '@angular/core';
import { Material } from '../Models/material';

@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.css']
})
export class CourseMaterialComponent {
  @Input() material: Material;
}
