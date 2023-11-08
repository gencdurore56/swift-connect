/*
  Filename: ComplexCalculator.js

  Description: This code implements a complex calculator that can perform various mathematical operations on complex numbers.
               The calculator has functions to add, subtract, multiply, divide, compute the modulus, and compute the conjugate of complex numbers.
               It also includes functions to convert between complex numbers and polar form.

  Author: John Doe

  Date: 2022-01-01
*/

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
  }

  subtract(complex) {
    return new ComplexNumber(this.real - complex.real, this.imaginary - complex.imaginary);
  }

  multiply(complex) {
    const real = this.real * complex.real - this.imaginary * complex.imaginary;
    const imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
    return new ComplexNumber(real, imaginary);
  }

  divide(complex) {
    const denominator = Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2);
    const real = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
    const imaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  modulus() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  computeConjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  toPolarForm() {
    const modulus = this.modulus();
    const angle = Math.atan2(this.imaginary, this.real);
    return [modulus, angle];
  }

  static fromPolarForm(modulus, angle) {
    const real = modulus * Math.cos(angle);
    const imaginary = modulus * Math.sin(angle);
    return new ComplexNumber(real, imaginary);
  }
}

// Example usage:

const complex1 = new ComplexNumber(3, 4);
const complex2 = new ComplexNumber(1, 2);

const sum = complex1.add(complex2);
console.log(`Sum: ${sum.real} + ${sum.imaginary}i`);

const difference = complex1.subtract(complex2);
console.log(`Difference: ${difference.real} + ${difference.imaginary}i`);

const product = complex1.multiply(complex2);
console.log(`Product: ${product.real} + ${product.imaginary}i`);

const quotient = complex1.divide(complex2);
console.log(`Quotient: ${quotient.real} + ${quotient.imaginary}i`);

const modulus = complex1.modulus();
console.log(`Modulus: ${modulus}`);

const conjugate = complex1.computeConjugate();
console.log(`Conjugate: ${conjugate.real} + ${conjugate.imaginary}i`);

const polarForm = complex1.toPolarForm();
console.log(`Polar Form: ${polarForm[0]} * e^(i * ${polarForm[1]})`);

const fromPolarForm = ComplexNumber.fromPolarForm(2, Math.PI / 4);
console.log(`Complex Number from Polar Form: ${fromPolarForm.real} + ${fromPolarForm.imaginary}i`);

// ... continue with more complex operations and examples

// Finally, we can create a complex calculator interface or application to make use of this complex number class.

// ... more code for the application