import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angularattack2016MypathAppComponent } from '../app/angularattack2016-mypath.component';

beforeEachProviders(() => [Angularattack2016MypathAppComponent]);

describe('App: Angularattack2016Mypath', () => {
  it('should create the app',
      inject([Angularattack2016MypathAppComponent], (app: Angularattack2016MypathAppComponent) => {
    expect(app).toBeTruthy();
  }));

});
