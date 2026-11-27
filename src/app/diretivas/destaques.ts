import {Directive, computed, input, output, signal} from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  host: {
    '(mouseenter)': 'mudar(true)',
    '(mouseleave)': 'mudar(false)',
    '[style.transform]': "ativo() ? 'translateY(-4px)' : null",
    '[class.ring-4]': 'ativo()',
    '[class.ring-amber-400]': 'ativo()',
  },
})
export class Destaque {
  readonly destaqueFixo = input(false);

  readonly destaqueMudou = output<boolean>();

  protected mouseEmCima = signal(false);
  protected readonly ativo = computed( () => this.destaqueFixo() || this.mouseEmCima());

  protected mudar(valor: boolean): void{
    this.mouseEmCima.set(valor);
    this.destaqueMudou.emit(valor);
  }


}