declare var Ps: any;
export class Select {
    
    private _selectVM;
    private _inputVM;
    private _btnVM;

    constructor(select) {
        this._selectVM = select;
        this._inputVM = select.querySelector('.select-input');
        this._btnVM = select.querySelector('.select-btn');

        if (select.classList.contains('select--color')){
            this.initSelectColor(select);
        } else if (select.classList.contains('select--size')) {
            this.initSelectSize(select);
        } else {
            this.initSelect(select);
        }
        
    }

    private initSelect(select): void {
        var that = this;

        var values = select.querySelectorAll('.select-value');
        for (var j = 0; j < values.length; j++) {
            var value = values[j].getAttribute('value');
            values[j].innerHTML = value;

            values[j].addEventListener('click', function (event) {
                for (var k = 0; k < values.length; k++) {
                    values[k].classList.remove('select-value--active');
                }
                this.classList.add('select-value--active');

                that._inputVM.setAttribute('value', event.currentTarget.value);
                that._inputVM.value = event.currentTarget.value;
                onToggle();
            });
        }
        that._btnVM.addEventListener('click', onToggle);
        that._inputVM.addEventListener('click', onToggle);

        that._inputVM.setAttribute('value', values[0].getAttribute('value'));

        Ps.initialize(select.querySelector('.select-value_list'));

        function onToggle(): void {
            select.classList.toggle('select--active');
        }
    }
    private initSelectColor(select): void {
        var that = this;
        
        this._btnVM.addEventListener('click', onToggle);
        this._inputVM.addEventListener('click', onToggle);
    
        var values = select.querySelectorAll('.select-value');
        for (var j = 0; j < values.length; j++) {
            var value = values[j].getAttribute('value');

            values[j].addEventListener('click', function (event) {
                for (var k = 0; k < values.length; k++) {
                    values[k].classList.remove('select-value--active');
                }
                this.classList.add('select-value--active');

                that._inputVM.setAttribute('value', event.currentTarget.value);
                that._inputVM.value = event.currentTarget.value;

                that._inputVM.innerHTML = '';
                that._inputVM.appendChild(
                    event.currentTarget.querySelector('.color').cloneNode()
                );
                onToggle();
            });
        }

        values[0].classList.add('select-value--active');
        that._inputVM.setAttribute('value', values[0].value);
        that._inputVM.value = values[0].value;
        that._inputVM.innerHTML = '';
        that._inputVM.appendChild(
             values[0].querySelector('.color').cloneNode()
        );

        Ps.initialize(select.querySelector('.select-value_list'));

        function onToggle(): void {
            select.classList.toggle('select--active');
        }
    }
    private initSelectSize(select): void {
        var that = this;
        
        this._btnVM.addEventListener('click', onToggle);
        this._inputVM.addEventListener('click', onToggle);
    
        var values = select.querySelectorAll('.select-value');
        for (var j = 0; j < values.length; j++) {
            var value = values[j].getAttribute('value');

            values[j].addEventListener('click', function (event) {
                for (var k = 0; k < values.length; k++) {
                    values[k].classList.remove('select-value--active');
                }
                this.classList.add('select-value--active');

                that._inputVM.setAttribute('value', event.currentTarget.value);
                that._inputVM.value = event.currentTarget.value;

                that._inputVM.innerHTML = '';
                var currentSizeVM = event.currentTarget.querySelector('.size').cloneNode();
                currentSizeVM.innerHTML = event.currentTarget.value;
                that._inputVM.appendChild(currentSizeVM);
                onToggle();
            });
        }
        
        values[0].classList.add('select-value--active');
        that._inputVM.setAttribute('value', values[0].value);
        that._inputVM.value = values[0].value;
        that._inputVM.innerHTML = '';
        var currentSizeVM = values[0].querySelector('.size').cloneNode();
        currentSizeVM.innerHTML = values[0].value;
        that._inputVM.appendChild(currentSizeVM);

        Ps.initialize(select.querySelector('.select-value_list'));

        function onToggle(): void {
            select.classList.toggle('select--active');
        }
    }

    public getData(): string {
        return this._selectVM.querySelector('.select-input').value;
    }
}
