import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UnSubscribe } from '@lbk/shared/unsubscribe.component';
import { fromEvent } from 'rxjs';

const SLIDER_CONTROL_ACCESSORS = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SliderComponent),
  multi: true,
};

@Component({
  selector: 'lbk-slider',
  providers: [SLIDER_CONTROL_ACCESSORS],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      #slider
      (click)="onSliderClick($event)"
      class="relative slider bg-empty-slider rounded-full h-3 w-full"
    >
      <!-- full  -->
      <div
        [style.width]="full"
        class="absolute w-1/2 h-full bg-full-slider rounded-full animate-pulse"
      ></div>
      <!-- end full  -->

      <!-- ball -->
      <div
        #ball
        [style.left]="left + 'px'"
        (mousedown)="onBallClick($event)"
        class="{{
          drag ? '' : 'duration-300'
        }}  bg-slider w-10 h-10 rounded-full grid place-content-center center left-0"
      >
        <img src="/assets/images/icon-slider.svg" alt="Slider" />
      </div>
      <!-- end ball -->
    </div>
  `,
})
export class SliderComponent
  extends UnSubscribe
  implements OnInit, ControlValueAccessor
{
  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;
  left = 0;
  drag = false;
  @Input() steps: number[] = [0, 25, 50, 75, 100];
  step!: number;
  onValue!: (value: number) => void;
  onTouch!: () => void;

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  writeValue(obj: number): void {
    this.step = this.steps.findIndex((s) => s === obj);
    this.flyTo(this.step);
  }

  registerOnChange(fn: any): void {
    this.onValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.append = fromEvent(window, 'mouseup').subscribe((event) => {
      this.drag = false;
    });

    this.append = fromEvent(window, 'mousemove').subscribe((event) => {
      if (!this.drag) return;
      const { clientX } = event as MouseEvent;
      this.moveTo(clientX);
    });
  }

  onBallClick(event: MouseEvent) {
    event.preventDefault();
    const { clientX } = event;
    this.drag = true;
    this.moveTo(clientX);
  }

  onSliderClick(event: MouseEvent) {
    event.preventDefault();
    const { clientX } = event;
    this.moveTo(clientX);
  }

  moveTo(value: number) {
    this.left = this.clamp(value - this.sliderLeft, 0, this.sliderWidth);

    const newStep = Math.floor(
      (this.left / this.sliderWidth) * this.steps.length
    );

    if (newStep !== this.step && newStep != this.steps.length) {
      this.step === newStep;
      this.onValue(this.steps[newStep]);
    }

    this.cd.markForCheck();
  }

  flyTo(index: number) {
    this.left = (index / this.steps.length) * this.sliderWidth;
  }

  clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  get full() {
    return `${(this.left * 100) / this.sliderWidth}%`;
  }

  get sliderWidth(): number {
    return this.slider.nativeElement.getBoundingClientRect().width;
  }

  get sliderLeft(): number {
    return this.slider.nativeElement.getBoundingClientRect().left;
  }
}
