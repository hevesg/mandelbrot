function ComplexNumber(a, b) {
    this.a = a;
    this.b = b;
}

ComplexNumber.prototype.addition = function(o) {
    return new ComplexNumber(
        this.a + o.a,
        this.b + o.b
    )
};

ComplexNumber.prototype.multiply = function(o) {
    return new ComplexNumber(
        this.a * o.a - this.b * o.b,
        this.b * o.a + this.a * o.b
    )
};

