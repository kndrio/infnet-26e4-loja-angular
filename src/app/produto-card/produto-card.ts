import { Component, computed, input, model, output } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Produto } from '../models/produto';
import { readonly } from '@angular/forms/signals';


@Component({
  imports: [ CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe],
  selector: 'app-produto-card',
  styleUrl: './produto-card.css',
  templateUrl: './produto-card.html',
})
export class ProdutoCard {

  readonly produto = input.required<Produto>();

  readonly adicionar = output<Produto>();

  readonly favorito = model(false);

  protected readonly precoFinal = computed(() => 
    this.produto().preco * (1 - this.produto().desconto)
  )

  protected readonly esgotado = computed(() => this.produto().estoque === 0);

  protected readonly nivelEstoque = computed(() => 
  Math.min(this.produto().estoque * 10, 100));


  protected alternarFavorito(): void {
    this.favorito.update((valor) => !valor);
  }
}