import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { CreditCard, CreditCardType } from "app/_model/credit-card";
import { CreditCardPreset } from "app/_model/credit-card-preset";

declare var Ps: any;

@Component({
	selector: 'credit-card-preset-list',
	templateUrl: './credit-card-preset-list.component.html',
	styleUrls: ['./credit-card-preset-list.component.scss']
})
export class CreditCardPresetListComponent implements OnInit {

	@Input() presetList: CreditCardPreset[] = [];

	@Output() onPresetListChange: EventEmitter<CreditCardPreset[]> = new EventEmitter<CreditCardPreset[]>();
	@Output() onEditPreset: EventEmitter<CreditCardPreset> = new EventEmitter<CreditCardPreset>();
	@Output() onAddPreset: EventEmitter<CreditCardPreset> = new EventEmitter<CreditCardPreset>();

	public editablePreset: CreditCardPreset = null;

	private _isInEditStatement: boolean = false;
	private _updateScrollInterval: any = null;

	public get isInEditStatement(): boolean {
		return this._isInEditStatement;
	}

	constructor(
		private _elementRef: ElementRef
	) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		Ps.initialize(this._elementRef.nativeElement.querySelector('.credit_card_preset_list-presets'));
		this._updateScrollInterval = setInterval(() => {
			Ps.update(this._elementRef.nativeElement.querySelector('.credit_card_preset_list-presets'));
		}, 150);
	}

	ngOnDestroy() {
		clearInterval(this._updateScrollInterval);
	}

	public onClickEditPreset(preset: CreditCardPreset): void {
		this._isInEditStatement = true;

		this.editablePreset = preset;
	}

	public editPreset(preset: CreditCardPreset): void {
		this._isInEditStatement = false;

		this.onPresetListChange.emit(this.presetList);
		this.onEditPreset.emit(preset);
		this.editablePreset = null;
	}


	public onClickAddPreset(): void {
		this._isInEditStatement = true;
		this.editablePreset = new CreditCardPreset('', new CreditCard(CreditCardType.MASTERCARD));
	}

	public addPreset(): void {
		this._isInEditStatement = false;

		this.presetList.push(this.editablePreset);
		this.onPresetListChange.emit(this.presetList);
		this.onAddPreset.emit(this.editablePreset);
		this.editablePreset = null;
	}


	public savePreset(preset: CreditCardPreset): void {
		if (this.presetList.some(p => p.id === preset.id)) {
			this.editPreset(preset);
		} else {
			this.addPreset();
		}
	}

}
