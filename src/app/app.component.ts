import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  mensagem = "Pokedex"
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Rayquaza', 'dragão voador', 414, 438, 306, 438, 306, 317, '1° Air Lock, 2° Outrage', 'Sem evolução', 90, 'Sem genero', 'Dizem que Rayquaza viveu por milhares de anos. As lendas contam que acabou com o conflito entre Kyogre e Groudon.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png', 'Hoenn'),
    new Pokemon(2, 'Zorua', 'dark', 284, 251, 196, 284, 196, 251, '1° Illusion, 2° Torment', 'Zoroark', 48, 'Femea', 'Uma alma que já partiu, voltou à vida em Hisui. Deriva o poder do ressentimento, que surge como energia acima de sua cabeça e assume a forma de inimigos. Dessa forma, Zorua desabafa a malícia persistente.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/570.png', 'Hisui'),
    new Pokemon(3, 'Greninja', 'água, dark', 348, 317, 256, 335, 265, 377, '1° Torrent, 2° Protean ', 'Evolução de froakie', 68, 'Macho', 'É um Pokémon leal e as vezes cruel. Antes de finalizar sua vitima, ele a confunde com uma velocidade incrível. Sendo um ninja, seu comportamento deve ser silencioso, se escondendo nas sombras e machucando o oponente com golpes rápidos e praticamente invisíveis.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png', 'Kalos'),
    new Pokemon(4, 'Lunatone', 'Pedra, Psíquico', 384, 229, 251, 317, 295, 262, '1° Levitate, 2° Confusion', 'Sem Evolução', 50, 'Sem genêro', 'Lunatone foi descoberto em um local onde um meteorito caiu. Como resultado, algumas pessoas teorizam que esse Pokémon veio do espaço.', 'https://img.pokemondb.net/artwork/avif/lunatone.avif', 'Meteoritos'),
    new Pokemon(5, 'Dragonair', 'Dragão', 326, 293, 251, 262, 262, 262, '1° Shed Skin, 2° Marvel Scale', 'Dragonite', 74, '50% macho, 50% femea', 'Dragonair armazena uma quantidade enorme de energia dentro de seu corpo. Diga-se que ele tem a habilidade de alterar as condições do tempo em suas proximidades, descargando a energia dos cristais de seu pescoço e cauda.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png', 'Kanto'),
    new Pokemon(6, 'Teddiursa', 'Normal', 324, 284, 218, 218, 218, 196, '1° Quick Feet, 2° Honey Gather', 'Ursaring', 74, '50% macho, 50% femea', 'Antes que os alimentos tornem-se escassos no inverno, seu hábito é acumular alimentos em muitos locais escondidos.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png', 'Johto'),
    new Pokemon(7, 'Houndoom', 'Dark, Fogo', 354, 306, 218, 350, 284, 317, '1° Flash Fire, 2° Unnerve ', 'Evolução do Houndour', 62, '50% macho, 50% femea', 'Houndoom é geralmente muito protetor, alerta, teimoso, inteligente e muito focado. Ele pode ser excessivamente agressivo, mas apenas para proteger, seus territorios ou seu treinador. Quando eles são devidamente treinados eles podem ser um Pokémon extremamente leal e atencioso.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png', 'Johto'),
    new Pokemon(8,'Scraggy ', 'Dark, Lutador', 304, 273, 262, 185, 262, 214, '1° Moxie, 2° Intimidate', 'Scrafty', 52, '50% macho, 50% femea','Scraggy é um Pokémon lagarto. Seus olhos ovais são definidas para os lados de sua cabeça, e seus dentes parecem estar constantemente expostos. A uma pequena escala vermelha em sua cabeça amarela. Abaixo a parte amarela da sua cabeça, seu corpo é de cor creme, com braços finos e, a barriga escala vermelha.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/559.png', 'Unova'),
    new Pokemon(9,'Lucario ', 'Lutador, Aço', 344, 350, 262, 361, 262, 306, '1° Inner Focus, 2° Aura Sphere', 'Evolução do Riolu', 60, '87.5% macho, 12.5% femea','Lucario controla ondas conhecidas como auras, que são poderosas o suficiente para pulverizar rochas enormes, a qual ele usa para abater seu adversário.', 'https://img.pokemondb.net/artwork/avif/lucario.avif', 'Sinnoh'),
    new Pokemon(10,'Empoleon', 'Água, Aço', 372, 298, 302, 353, 331, 240, '1° Hydro Pump, 2° Defiant', 'Evolução do Prinplup', 66, '87.5% macho, 12.5% femea','Desde os tempos antigos, é reverenciado pelo povo de Hisui, que o chama de Mestre das Ondas. Suas asas são páreo até mesmo para lâminas criadas por mestres.', 'https://img.pokemondb.net/artwork/avif/empoleon.avif', 'Sinnoh'),
    new Pokemon(11,'Infernape ', 'Fogo, Lutador', 356, 337, 265, 337, 265, 346, '1° Blaze, 2° Iron Fist', 'Evolução de Monferno', 74, '87.5% macho, 12.5% femea','Um Pokémon alto e resistente com uma aparência deslumbrante. Ele se envolve em chamas e batalhas como se estivesse dançando, um verdadeiro espetáculo para ser visto.', 'https://img.pokemondb.net/artwork/avif/infernape.avif', 'Sinnoh '),
    new Pokemon(12,'Lugia', 'Psiquico, Voador', 416, 306, 394, 306, 447, 350, '1° Pressure, 2° Multiscale ', 'Sem Evolução', 90, 'Sem gênero','Lugia é tão poderoso que até mesmo um leve bater de asas pode explodir casas. Como resultado, ele opta por viver longe da vista, nas profundezas do mar.', 'https://img.pokemondb.net/artwork/avif/lugia.avif', 'Profundezas dos Mares'),
    new Pokemon(13,'Tentacool ', 'Água, Veneno', 284, 196, 185, 218, 328, 262, '1° Liquid Ooze, 2° Rain Dish', 'Tentacruel', 48, '50% macho, 50% femea','Eles disparam raios dos orbes magenta e vítreos que lembram olhos no topo de suas cabeças, e flutuam em mares rasos. Durante a maré baixa, às vezes podem ser encontrados nas praias, ressecados.', 'https://img.pokemondb.net/artwork/avif/tentacool.avif', 'Kanto'),
    new Pokemon(14,'Mamoswine ', 'Pedra, Gelo', 424, 394, 284, 262, 240, 284, '1° Blizzard, 2° Earthquake', 'Evolução do Piloswine', 65, '50% macho, 50% femea','Esta espécie atingiu seu apogeu durante o período conhecido como era do gelo. Suspeito que o clima frígido de Hisui esteja em harmonia com a constituição de Mamoswine, despertando assim um potencial oculto.', 'https://img.pokemondb.net/artwork/avif/mamoswine.avif', 'Hisui'),
    new Pokemon(15,'Lampent ', 'Fantasma, Fogo', 324, 196, 240, 317, 240, 229, '1° Flame Body, 2° Infiltrator', 'Chandelure', 64, '50% macho, 50% femea','Este Pokémon aparece pouco antes de alguém falecer, por isso é temido como um emissário da morte.', 'https://img.pokemondb.net/artwork/avif/lampent.avif', 'Unova ')

  ];
  selectedPokemon?: Pokemon;
  mostrarDetalhes(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
  fecharModal() {
    this.selectedPokemon = undefined;
  }

}
