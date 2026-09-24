import type { AutorId } from "../../shared/identifiers";

export type ResumoDoLivro = {
  numeroRegistro: string;
  isbn: string;
  titulo: string;
  noAcervo: boolean;
};

/** Contrato de leitura publicado pelo Acervo, no vocabulário do Acervo. */
export interface ConsultaDeLivros {
  /** Só o que está na estante: quem decide o que é "no acervo" é o Livro. */
  noAcervoDoAutor(autorId: AutorId): ResumoDoLivro[];

  /** Um livro pelo número de registro, esteja ou não no acervo. */
  porNumeroRegistro(numero: string): ResumoDoLivro | null;
}
