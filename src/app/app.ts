import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoCard } from './produto-card/produto-card';
import { Destaque } from './diretivas/destaques';
import {Categoria, Produto, PRODUTOS} from './models/produto';

@Component({
  imports: [FormsModule, CurrencyPipe, ProdutoCard, Destaque],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly titulo = signal('Loja do Café');
  protected readonly produtos = signal<Produto[]>(PRODUTOS);

  protected readonly busca = signal('');
  protected readonly categoria = signal<Categoria | 'todas'>('todas');
  protected readonly categorias: (Categoria | 'todas')[] = ['todas', 'cafe', 'acessorios', 'livros'] ;

  //estados a partir dos filhos
  protected readonly emDestaque = signal<string | null>(null);
  protected readonly carrinho = signal<Produto[]>([]);
  protected readonly favoritos = signal<Record<number, boolean>>({});

  protected filtrados = computed(() => {
    const termo = this.busca().trim().toLowerCase();
    return this.produtos().filter(
      (p) => (this.categoria()=== 'todas' || p.categoria === this.categoria()) 
      && p.nome.toLowerCase().includes(termo),
    )
  })


  protected readonly total = computed(() =>
    this.carrinho().reduce((soma, p) => soma + p.preco * (1 - p.desconto), 0),
  )

  protected noCarrinho(produto: Produto):void {
      this.carrinho.update((itens) => [...itens, produto]);
  }

  protected limpar(): void{
    this.carrinho.set([]);
  }

  protected isfavorito(id: number):boolean {
    return this.favoritos()[id] ?? false;
  }

  protected setFavorito(id: number, valor: boolean):void {
    this.favoritos.update((map)=> ({...map, [id]:valor}));
  }

}