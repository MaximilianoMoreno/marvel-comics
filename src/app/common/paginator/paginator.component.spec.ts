import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

/* In the host component's template we will pass the inputs to the actual
 * component to test, that is TestComponent in this case
 */
@Component({
  template: '<app-paginator [totalResults]="total" (pageEvent)="onPaginationChange($event)"></app-paginator>',
})
class TestHostComponent {
  total: number;
  onPaginationChange(): void {}
}

/* In the host component's template we will pass the inputs to the actual
 * component to test, that is TestComponent in this case
 */

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent, TestHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should detect a change in an input parameter', () => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    const testHost = hostFixture.componentInstance;

    testHost.total = 40;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // expect(element).toBe(40);
      expect(component.totalResults).toBe(40);
    });
  });

  it('should emit the change of a selected page', () => {
    spyOn(component.pageEvent, 'emit');
    fixture.detectChanges();

    component.setPage(2);

    expect(component.pageEvent.emit).toHaveBeenCalledWith({
      pageIndex: 2,
      pageSize: 10,
    });
    expect(component.currentPage).toBe(2);
  });
});
