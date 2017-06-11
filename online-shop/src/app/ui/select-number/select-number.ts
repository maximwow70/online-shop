export class SelectNumber {

    private input;

    private max;
    private min;

    constructor(select) {
        var that = this;

        this.input = select.querySelector('.select_number-value');
        var value = this.input.getAttribute('value');

        this.min = parseFloat(this.input.getAttribute('min'));
        this.max = parseFloat(this.input.getAttribute('max'));
        var step = parseFloat(this.input.getAttribute('step'));

        //this.onchange = function () { };

        this.input.oninput = function (event) {
            var value = parseFloat(that.input.value);
            if (isNaN(value)) {
                that.input.value = 0;
            } else {
                that.setValue(value);
            }

            that.onChange();
        }

        var btnIncrement = select.querySelector('.select_number-btn--inc');
        if (btnIncrement) {
            btnIncrement.addEventListener('click', function () {
                that.setValue(parseFloat(that.input.value) + step);
            });
        }

        var btnDecrement = select.querySelector('.select_number-btn--dec');
        if (btnDecrement) {
            btnDecrement.addEventListener('click', function () {
                that.setValue(parseFloat(that.input.value) - step);
            });
        }
    }

    public setValue(value): void {
        if (value < this.min) {
            this.input.value = this.min;
        } else if (value > this.max) {
            this.input.value = this.max;
        } else if(!isNaN(value)){
            this.input.value = value;
        }
    }

    public getValue(): any {
        return this.input.value;
    }
    public onChange(): void {
        this.setValue(this.input.value);
    }

}
