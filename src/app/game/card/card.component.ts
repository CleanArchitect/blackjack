import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { Card } from '../models/card';

@Component({
    selector: 'bj-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardComponent {
    @Input() card: Card;

    @HostBinding() class = 'card';

    @HostBinding('class.face-down') get faceDown(): boolean { return !this.card; }
}