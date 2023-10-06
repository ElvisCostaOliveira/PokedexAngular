export class Pokemon {

  id: number;
  nome: string;
  tipos: string;
  saudeTotal: number;
  poderAtaqueFisico: number;
  resistenciaFisica: number;
  poderAtaqueMagico: number;
  resistenciaMagica: number;
  rapidez: number;
  habilidadesEspeciais: string;
  evolucao: string;
  nivel: number;
  genero: string;
  descricao: string;
  imagem: string;
  regiao: string;

  constructor(
    id: number,
    nome: string,
    tipos: string,
    saudeTotal: number,
    poderAtaqueFisico: number,
    resistenciaFisica: number,
    poderAtaqueMagico: number,
    resistenciaMagica: number,
    rapidez: number,
    habilidadesEspeciais: string,
    evolucao: string,
    nivel: number,
    genero: string,
    descricao: string,
    imagem: string,
    regiao: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.tipos = tipos;
    this.saudeTotal = saudeTotal;
    this.poderAtaqueFisico = poderAtaqueFisico;
    this.resistenciaFisica = resistenciaFisica;
    this.poderAtaqueMagico = poderAtaqueMagico;
    this.resistenciaMagica = resistenciaMagica;
    this.rapidez = rapidez;
    this.habilidadesEspeciais = habilidadesEspeciais;
    this.evolucao = evolucao;
    this.nivel = nivel;
    this.genero = genero;
    this.descricao = descricao;
    this.imagem = imagem;
    this.regiao = regiao;
  }

  calcularDano(oponente: Pokemon): number {
    let dano = this.poderAtaqueFisico - oponente.resistenciaFisica;
    dano = Math.max(dano, 0);
    oponente.saudeTotal -= dano;
    return dano;
  }


  verificarEvolucao(): boolean {
    if (this.nivel >= 16) {
      return true;
    }
    return false;
  }

  evoluir(pokemonEvoluido: Pokemon): void {
    if (this.verificarEvolucao()) {
      this.id = pokemonEvoluido.id;
      this.nome = pokemonEvoluido.nome;
      this.tipos = pokemonEvoluido.tipos;

      console.log(`Pokemon evoluído para: ${this.nome}`);
      console.log(`Novos atributos:`, this);
    } else {
      console.log(`O Pokémon ainda não pode evoluir.`);
    }
  }
}