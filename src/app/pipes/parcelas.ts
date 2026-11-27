import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'parcelas'})
export class ParcelasPipe implements PipeTransform {
    private readonly moeda = new Intl.NumberFormat('pr-BR', {style: 'currency', currency: 'BRL'});

    transform(valor: number, parcelas = 3):string {
        if (parcelas <= 1) return `à vista ${this.moeda.format(valor)}`;
        return `${parcelas}x de ${this.moeda.format(valor / parcelas)} sem juros`;
    }
}
