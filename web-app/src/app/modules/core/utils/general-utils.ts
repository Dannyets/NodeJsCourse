import { Injectable } from '@angular/core';

@Injectable()
export class GeneralUtils {
    isAround(value: number, aroundValue: number, radius: number) {
        const minValue = aroundValue - radius;
        const maxValue = aroundValue + radius;
        return value >= minValue && value <= maxValue;
    }
}
