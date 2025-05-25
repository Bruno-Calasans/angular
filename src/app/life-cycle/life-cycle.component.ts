import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent
  implements
    OnChanges,
    DoCheck,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // It's called once after component instanciation
  constructor() {
    console.log('Constructor called');
  }

  // 1 - It's called runs every times the components inputs change
  // It runs once after ngOnInit
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1 - ngOnChanges called');
    console.log('Changes: ', changes);
  }

  // 2 - It's called after component inputs and before component renders
  // Use for API call
  // One of the most use hooks
  ngOnInit(): void {
    console.log('2 - ngOnInit called');
  }

  // 3 - It runs every time component checks a component's template for changes
  //  It runs once after ngInit
  // Use for every change in the component
  // It's performance heavy, so avoid it
  ngDoCheck(): void {
    console.log('3 - ngDoCheck called');
  }

  // 4 -It runs after component's nested children (content) has been initialized
  // Use for content querry (contentChild, contentChildren)
  ngAfterContentInit(): void {
    console.log('4 - ngAfterContentInit called');
  }

  // 6 - It's called every time the component's nested children (content) have been checked for changes
  // You can access updated content query here, but you can't change it
  // It's performance heavy, so avoid it
  ngAfterContentChecked(): void {
    console.log('6 - ngAfterContentChecked called');
  }

  // 7 - It's called once after view is initialized
  // Use for get to read view query (viewChild, viewChildren), but you can't do any change
  // One of the most use hooks
  ngAfterViewInit(): void {
    console.log('7 - ngAfterViewInit called');
  }

  // 8 - It's called every time after component's children have been checked for changes
  // You can access updated view query here, but you can't change anything
  // It's performance heavy, so avoid it
  // One of the most use hooks
  ngAfterViewChecked(): void {
    console.log('8 - ngAfterViewChecked called');
  }

  // 9 - It's called only once, after the component is destroyed
  // It's detroyed when it's not showed in the page:
  // - after go to another page
  // - after hide the component using @if, for example
  // One of the most use hooks
  ngOnDestroy(): void {
    console.log('9 - ngOnDestroy called');
  }
}
