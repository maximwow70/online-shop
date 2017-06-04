import { SelectNumber } from "app/ui/select-number/select-number";
import { Range } from "app/ui/range/range";

export class Datapicker {

    private min;
    private max;

    private datapickerVM;
    private dataVMs;

    constructor(datapickerVM) {
        var that = this;

        this.datapickerVM = datapickerVM;
        this.dataVMs = datapickerVM.querySelectorAll('.datapicker-data');

        for (var i = 0; i < this.dataVMs.length; i++) {
            this.dataVMs[i].setAttribute('data-picked', 'false');
            this.dataVMs[i].addEventListener('click', togglePicked);
        }

        function togglePicked(event) {
            var data = event.currentTarget;
            var isPicked = data.getAttribute('data-picked');
            if (isPicked == 'true') {
                data.classList.remove('datapicker-data--picked');
                data.setAttribute('data-picked', 'false');
            } else {
                data.classList.add('datapicker-data--picked');
                data.setAttribute('data-picked', 'true');
            }
            that.onChange();
        }

        if (datapickerVM.classList.contains('datapicker--cost')) {
            this.initCostPicker();
        }
    }

    private initCostPicker() {
        var that = this;

        var selectNumberVM = this.datapickerVM.querySelectorAll('.select_number');
        var selectNumbersInputVM = this.datapickerVM.querySelectorAll('.select_number-value');
        var rangeVM = this.datapickerVM.querySelector('.range');

        this.min = selectNumbersInputVM[0].getAttribute('min');
        this.max = selectNumbersInputVM[0].getAttribute('max');

        selectNumbersInputVM[1].setAttribute('min', this.min);
        selectNumbersInputVM[1].setAttribute('max', this.max);
        rangeVM.setAttribute('data-min', this.min);
        rangeVM.setAttribute('data-max', this.max);

        var range = new Range(rangeVM);
        var selectLeft = new SelectNumber(selectNumberVM[0]);
        var selectRight = new SelectNumber(selectNumberVM[1]);
        range.onchange = onRangeChange;
        selectLeft.onChange = onLeftChange;
        selectRight.onChange = onRightChange;

        function onRangeChange() {
            selectLeft.setValue(
                Math.round(range.getData()[0])
            );
            selectRight.setValue(
                Math.round(range.getData()[1])
            );
            that.onChange();
        }
        function onLeftChange() {
            range.controls[0].setRange(
                selectLeft.getValue() / that.max
            );
            that.onChange();
        }
        function onRightChange() {
            range.controls[1].setRange(
                selectRight.getValue() / that.max
            );
            that.onChange();
        }

        this.getPickedData = function () {
            return {
                min: selectLeft.getValue(),
                max: selectRight.getValue()
            }
        }

        onRangeChange();
    }

    public onChange(): void {

    }
    public getPickedData(): any {
        var pickedData = [];
        for (var i = 0; i < this.dataVMs.length; i++) {
            if (this.dataVMs[i].getAttribute('data-picked') == 'true') {
                pickedData.push(this.dataVMs[i].value);
            }
        }
        return pickedData;
    }
}