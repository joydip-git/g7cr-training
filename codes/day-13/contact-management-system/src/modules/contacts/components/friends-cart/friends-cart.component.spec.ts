import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsCartComponent } from './friends-cart.component';

describe('FriendsCartComponent', () => {
  let component: FriendsCartComponent;
  let fixture: ComponentFixture<FriendsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
