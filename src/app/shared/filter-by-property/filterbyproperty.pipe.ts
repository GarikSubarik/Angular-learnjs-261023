import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterbypropertyPipe implements PipeTransform {
    transform<T, P extends keyof T>(
        items: T[] | undefined | null,
        searchingProperty: P,
        searchValue: T[P],
    ): T[] | undefined | null {
        if (!items) {
            return items;
        }

        if (typeof searchValue === 'string') {
            return items.filter(item => {
                const itemProperty = (item[searchingProperty] as string).toLowerCase();
                const value = (searchValue as string).toLowerCase();

                return itemProperty.includes(value);
            });
        }

        return items.filter(item => item[searchingProperty] === searchValue);
    }
}
