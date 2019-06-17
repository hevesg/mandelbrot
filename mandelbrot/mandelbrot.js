function MandelbrotItem(x, y, a, b) {
    this.position = new Point(x, y);
    this.initial = new ComplexNumber(a, b);
    this.current = new ComplexNumber(a, b);
}

MandelbrotItem.prototype.nextCurrent = function() {
    this.current = this.current.multiply(this.current).addition(this.initial);
    //this.current = this.current.multiply(this.current).addition(new ComplexNumber(0.6, -0.32));
};

MandelbrotItem.prototype.isPartOfSet = function () {
    return this.current.a <= 2 &&
        this.current.a >= -2 &&
        this.current.b <= 2 &&
        this.current.b >= -2;
};

