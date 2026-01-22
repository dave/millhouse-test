import { add, subtract, multiply } from './utils/math';

export class Calculator {
  public lastResult: number = 0;

  add(a: number, b: number): number {
    this.lastResult = add(a, b);
    return this.lastResult;
  }

  subtract(a: number, b: number): number {
    this.lastResult = subtract(a, b);
    return this.lastResult;
  }

  multiply(a: number, b: number): number {
    this.lastResult = multiply(a, b);
    return this.lastResult;
  }
}