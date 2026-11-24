import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoCard } from './produto-card/produto-card';
import {Categoria, Produto, PRODUTOS} from './models/produto';

@Component({
  imports: [RouterOutlet, ProdutoCard, FormsModule],
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

  protected filtrados = computed(() => {
    const termo = this.busca().trim().toLowerCase();
    return this.produtos().filter(
      (p) => (this.categoria()=== 'todas' || p.categoria === this.categoria()) 
      && p.nome.toLowerCase().includes(termo),
    )
  })
}
