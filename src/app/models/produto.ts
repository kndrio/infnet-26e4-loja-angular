export type Categoria = 'cafe' | 'acessorios' | 'livros';

export interface Produto {
  readonly id: number;
  nome: string;
  preco: number;
  categoria: Categoria;
  estoque: number;
  desconto: number; // 0.1 = 10%
  lancamento: string; // data ISO
  icone: string;
}

export const PRODUTOS: Produto[] = [
  {id: 1, nome: 'Café Tradicional', preco: 25.90, categoria: 'cafe', estoque: 12, desconto: 0, lancamento: '2026-11-26', icone: '☕'},
  {id: 2, nome: 'Café Especial', preco: 35.90, categoria: 'cafe', estoque: 6, desconto: 0.10, lancamento: '2026-11-26', icone: '🫘'},
  {id: 3, nome: 'Café Gourmet', preco: 45.90, categoria: 'cafe', estoque: 0, desconto: 0, lancamento: '2026-11-26', icone: '🥇'},
  {id: 4, nome: 'Cafeteira Italiana', preco: 89.90, categoria: 'acessorios', estoque: 8, desconto: 0.15, lancamento: '2026-11-20', icone: '🏺'},
  {id: 5, nome: 'Copo Térmico', preco: 49.90, categoria: 'acessorios', estoque: 15, desconto: 0, lancamento: '2026-11-18', icone: '🥤'},
  {id: 6, nome: 'Moedor de Café', preco: 129.90, categoria: 'acessorios', estoque: 4, desconto: 0.20, lancamento: '2026-11-15', icone: '⚙️'},
  {id: 7, nome: 'O Mundo do Café', preco: 59.90, categoria: 'livros', estoque: 10, desconto: 0, lancamento: '2026-11-10', icone: '📖'},
  {id: 8, nome: 'Guia do Barista', preco: 69.90, categoria: 'livros', estoque: 7, desconto: 0.10, lancamento: '2026-11-08', icone: '📚'},
  {id: 9, nome: 'Histórias do Café', preco: 39.90, categoria: 'livros', estoque: 0, desconto: 0, lancamento: '2026-11-05', icone: '☕'},
]