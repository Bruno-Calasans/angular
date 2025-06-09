import { Component, OnInit, inject } from '@angular/core';
import { ResourceService } from '../service/resource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource',
  imports: [CommonModule],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css',
})
export class ResourceComponent implements OnInit {
  resourceService = inject(ResourceService);
  quotes = [] as any;

  get resourceRx() {
    return this.resourceService.rxResourceData;
  }

  get resource() {
    return this.resourceService.resourceData;
  }

  ngOnInit() {
    // this.quotes = this.resourceRx.value()?.quotes;
    this.quotes = this.resource.value();
  }
}
