export class RangeControl {

    private range;
    private rangeControlVM;
    private valueVM;

    private maxValue;
    private minValue;

    public onchange;

    constructor(rangeControlVM, minValue, maxValue, points, barVM) {
        var that = this;
    
        this.rangeControlVM = rangeControlVM;
        this.maxValue = maxValue;
        this.minValue = minValue;

        var valueVM = rangeControlVM.querySelector('.range-value');
        this.valueVM = valueVM;

        this.range = parseFloat(rangeControlVM.getAttribute('data-range'));
        this.onchange = function () { };

        if (isNaN(this.range)) {
            that.changeRange((points.length > 0) ? points[0] : 0);
        }

        function getNearPoint(proportion) {
            if (that.range < proportion) {
                var rightPoint = points[points.length - 1];
                for (var i = points.length - 1; i >= 0; i--) {
                    rightPoint = (points[i] > that.range) ? points[i] : rightPoint;
                }
                rightPoint = (Math.abs(rightPoint - proportion) < Math.abs(that.range - proportion)) ? rightPoint : that.range;
                return rightPoint;
            } else {
                var leftPoint = points[0];
                for (var i = 0; i < points.length; i++) {
                    leftPoint = (points[i] < that.range) ? points[i] : leftPoint;
                }
                leftPoint = (Math.abs(leftPoint - proportion) < Math.abs(that.range - proportion)) ? leftPoint : that.range;
                return leftPoint;
            }
        }

        function mouseMove(event) {
            var leftX = event.clientX - barVM.getBoundingClientRect().left;
            var proportion = leftX / parseFloat(window.getComputedStyle(barVM).width);
            if (proportion > 1) {
                proportion = 1;
            } else if (proportion < 0) {
                proportion = 0;
            }

            if (points.length > 0) {
                that.changeRange(getNearPoint(proportion));
            } else {
                that.changeRange(proportion);
            }
        }

        rangeControlVM.addEventListener('mousedown', function () {
            document.addEventListener('mousemove', mouseMove);
        });
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', mouseMove);
        });
        rangeControlVM.addEventListener('keydown', function (event) {
            if (event.keyCode == 39) {
                if (points.length > 0) {
                    var min = 0;
                    for (var i = 0; i < points.length; i++) {
                        if (points[i] > that.range) {
                            min = points[i];
                            break;
                        }
                    }
                    that.changeRange(Math.max(min, that.range));
                } else {
                    that.changeRange(that.range += 0.1);
                }
            } else if (event.keyCode == 37) {
                if (points.length > 0) {
                    var max = points[points.length - 1];
                    for (var i = 0; i < points.length; i++) {
                        if (points[i] < that.range) {
                            max = points[i];
                        }
                    }
                    that.changeRange(Math.min(max, that.range));
                } else {
                    that.changeRange(that.range -= 0.1);
                }
            }
        })

        if (points.length > 0) {
            for (var i = 0; i < points.length; i++) {
                if (this.range <= points[i]) {
                    this.setRange(points[i]);
                    break;
                }
            }
        } else {
            that.changeRange(this.range);
        }
    }

    private changeRange(proportion): void {
        this.range = Math.min(Math.max(proportion, 0), 1);

        this.rangeControlVM.style.left = this.range * 100 + "%";

        var currentValue = this.range * (this.maxValue - this.minValue) + this.minValue;
        this.rangeControlVM.setAttribute('data-range', currentValue);
        this.valueVM.textContent = Math.round(currentValue);

        this.onchange();
    }

    public setRange(proportion): void {
        this.changeRange(proportion);
    }
}
export class Range {

    private points;
    public controls;

    private minValue;
    private maxValue;

    public onchange;

    constructor(rangeVM) {
        var that = this;

        this.points = [];
        this.controls = [];
        this.onchange = function () { };

        this.minValue = parseFloat(rangeVM.getAttribute('data-min'));
        this.maxValue = parseFloat(rangeVM.getAttribute('data-max'));

        var pointsVM = rangeVM.querySelectorAll('.range-point');
        var barVM = rangeVM.querySelector('.range-bar');
        var progressBarVM = rangeVM.querySelector('.range-progress_bar');

        for (var i = 0; i < pointsVM.length; i++) {
            this.points.push(parseFloat(pointsVM[i].getAttribute('data-point')));
            if (this.points[i] > 1) {
                this.points[i] = 1;
            } else if (this.points[i] < 0) {
                this.points[i] = 0;
            }
            pointsVM[i].style.left = this.points[i] * 100 + "%";
        }
        this.points.sort(function (a, b) { return a > b });

        var controlsVM = rangeVM.querySelectorAll('.range-control');
        for (var i = 0; i < controlsVM.length; i++) {
            var control = new RangeControl(
                controlsVM[i],
                this.minValue,
                this.maxValue,
                this.points,
                barVM
            );
            control.onchange = onControlChange;
            this.controls.push(control);
        }

        function onControlChange() {
            var dataRange = that.getDataRange();
            if (dataRange.length === 1) {
                progressBarVM.style.width = dataRange[0] * 100 + "%";
            }
            if (dataRange.length === 2) {
                if (dataRange[0] > dataRange[1]) {
                    that.controls[0].setRange(dataRange[1]);
                }
                progressBarVM.style.width = (dataRange[1] - dataRange[0]) * 100 + "%";
                progressBarVM.style.left = dataRange[0] * 100 + "%";
            }
            that.onchange();
        }

        onControlChange();
    }

    public getDataRange(): any {
        var dataRange = [];
        for (var i = 0; i < this.controls.length; i++) {
            dataRange.push(this.controls[i].range);
        }
        return dataRange;
    }
    public getData(): any {
        var data = [];
        for (var i = 0; i < this.controls.length; i++) {
            data.push(
                this.controls[i].range * (this.maxValue - this.minValue) + this.minValue
            );
        }
        return data;
    }

}

