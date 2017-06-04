declare var Ps: any;
export class Select {

    constructor(select) {
        var that = this;

        var input = select.querySelector('.select-input');
        var btn = select.querySelector('.select-btn');

        var values = select.querySelectorAll('.select-value');
        for (var j = 0; j < values.length; j++) {
            var value = values[j].getAttribute('value');
            values[j].innerHTML = value;

            values[j].innerHTML = value;
            values[j].addEventListener('click', function (event) {
                for (var k = 0; k < values.length; k++) {
                    values[k].classList.remove('select-value--active');
                }
                this.classList.add('select-value--active');

                input.setAttribute('value', event.currentTarget.value);
                input.value = event.currentTarget.value;
                onToggle();
            });
        }
        btn.addEventListener('click', onToggle);
        input.addEventListener('click', onToggle);

        input.setAttribute('value', values[0].getAttribute('value'));

        Ps.initialize(select.querySelector('.select-value_list'));

        function onToggle(): void {
            select.classList.toggle('select--active');
        }
        
    }
}
