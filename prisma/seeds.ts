import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  console.log('Starting seeds 🚀');
  console.log('Creating categories...');

  const mockCategories = [
    'Mangá',
    'Drama',
    'Ficção Científica',
    'Fantasia',
    'Biografia',
    'Administração e Negócios',
    'Romance',
    'Suspense',
    'Esportes e Lazer',
    'Música',
    'Botânica',
    'Fotografia',
    'Economia',
    'Moda'
  ];

  await prisma.category.createMany({
    data: mockCategories.map((category) => ({ name: category }))
  });

  const categories = await prisma.category.findMany();

  const data = [
    //Jujutsu Kaisen
    {
      name: 'Jujutsu Kaisen',
      image:
        'https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter((categorie) => categorie.name === 'Mangá')[0]
              .id
          }
        ]
      },
      description:
        'Apesar do estudante colegial Yuuji Itadori ter grande força física, ele se inscreve no Clube de Ocultismo. Certo dia, eles encontram um "objeto amaldiçoado" e retiram o selo, atraindo criaturas chamadas de "maldições". Itadori corre em socorro de seus colegas, mas será que ele será capaz de abater essas criaturas usando apenas a força física?! Na compra da primeira edição de Jujutsu ganhe de brinde um Poster Exclusivo',
      volumes: {
        create: [
          {
            title: 'Volume 0',
            image:
              'https://m.media-amazon.com/images/I/71sicR3ldaL._SL1459_.jpg',
            synopsis:
              'O estudante colegial Yuuta Okkotsu deseja ser executado porque sofre com as ações de Rika Orimoto, espírito rancoroso que o possuiu. Enquanto isso, Satoru Gojou, professor que ensina a exorcizar "maldições", transfere Yuuta para a Escola Técnica Superior de Jujutsu de Tokyo. Tem início a pré-sequência da série Jujutsu Kaisen!'
          },
          {
            title: 'Volume 1',
            image:
              'https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg',
            synopsis:
              'Apesar do estudante colegial Yuuji Itadori ter grande força física, ele se inscreve no Clube de Ocultismo. Certo dia, eles encontram um "objeto amaldiçoado" e retiram o selo, atraindo criaturas chamadas de "maldições". Itadori corre em socorro de seus colegas, mas será que ele será capaz de abater essas criaturas usando apenas a força física?! Na compra da primeira edição de Jujutsu ganhe de brinde um Poster Exclusivo'
          },
          {
            title: 'Volume 2',
            image:
              'https://m.media-amazon.com/images/I/91MAequ2koL._SL1500_.jpg',
            synopsis:
              'Um útero amaldiçoado surge repentinamente em um reformatório. Itadori e seus colegas do primeiro ano foram designados para salvar as pessoas que não conseguiram fugir do edifício! Mas o grupo depara-se com uma situação desesperadora: o útero se transformou em um espírito amaldiçoado de nível especial. Itadori tenta revidar, trocando de corpo com Sukuna, mas será que o plano vai dar certo?!'
          },
          {
            title: 'Volume 3',
            image:
              'https://m.media-amazon.com/images/I/51whdHRS4LL._SY445_SX342_.jpg',
            synopsis:
              'Aoi Toudou e Mai Zenin, da Escola Técnica Superior de Jujutsu de Kyoto, aparecem diante de Fushiguro e Kugisaki! O que Fushiguro respondeu para Toudou, quando questionado sobre o tipo de garota que ele gosta? Enquanto isso, Itadori é enviado para o local em que um espírito amaldiçoado provocou um incidente, fazendo com que o feiticeiro treine suas habilidades na prática!'
          },
          {
            title: 'Volume 4',
            image:
              'https://m.media-amazon.com/images/I/71VS-OuXOjL._SL1459_.jpg',
            synopsis:
              'Itadori investiga os assassinatos causados por uma maldição e acaba conhecendo Junpei, um garoto que é fascinado por Mahito, o responsável pelas mortes. Qual será a reação de Itadori ao ver o novo amigo transformado em fantoche da maldição?'
          },
          {
            title: 'Volume 5',
            image:
              'https://m.media-amazon.com/images/I/71c-+BcZ-eL._SL1459_.jpg',
            synopsis:
              'Tem início o Intercâmbio da Escola Irmã de Kyoto. O primeiro dia do torneio em equipe terá como vencedor o grupo que exorcizar primeiro uma maldição de nível 2, mas o briguento Todou ataca de surpresa o grupo da Escola de Tokyo, e Itadori recebe a tarefa de enfrentá-lo. O que ele não esperava é que o restante da equipe da Escola de Kyoto apareceria para se juntar ao confronto!!'
          },
          {
            title: 'Volume 6',
            image:
              'https://m.media-amazon.com/images/I/71SMsdMeHuL._SY466_.jpg',
            synopsis:
              'A equipe de Kyoto pretende assassinar Itadori durante o torneio, mas Mahito invade o local trazendo mestres das maldições e um espírito de nível especial. Os professores correm para resgatar os alunos, mas são separados pela "cortina" lançada pelo inimigo. Inumaki, Fushiguro e Kamo são atacados pela maldição Hanami. Será que o trio conseguirá escapar?!'
          },
          {
            title: 'Volume 7',
            image:
              'https://m.media-amazon.com/images/I/71KDDGl0i7L._SY466_.jpg',
            synopsis:
              'Os feiticeiros repelem o ataque da maldição especial Hanami, mas os dedos do Sukuna e os fetos das Pinturas da Morte, sob a guarda da Escola de Jujutsu, são roubados. Uma nova ameaça surge com a encarnação das Pinturas da Morte. Desconhecendo esse perigo, Itadori e seus amigos são incumbidos da missão de exorcizar uma maldição que ataca perto de portas.'
          },
          {
            title: 'Volume 8',
            image:
              'https://m.media-amazon.com/images/I/71f3oPmnbBL._SY466_.jpg',
            synopsis:
              'Itadori e seu grupo recolhem um dos dedos de Sukuna após abater Kechizu e Eso, dois fetos encarnados das "Nove Pinturas da Morte". Como resultado, eles recebem a recomendação para serem promovidos a feiticeiros de nível 1. Quais são as intenções de Gojou, que orquestra tudo nos bastidores? A história volta ao passado, para narrar o incidente com Gojou e Getou quando eram estudantes do 2º ano na Escola Técnica de Jujutsu.'
          },
          {
            title: 'Volume 9',
            image:
              'https://m.media-amazon.com/images/I/71qJzYr9icL._SY466_.jpg',
            synopsis:
              'Gojou e Getou receberam a missão de proteger o receptáculo da estrela, mas são atacados de surpresa pelo "assassino de feiticeiros", Touji Fushiguro. O que parece ter sido uma derrota completa da dupla de estudantes dá lugar a uma reviravolta. Qual será o desfecho deste caso do passado que fez de Gojou o mais poderoso feiticeiro do mundo e contribuiu para que Getou abandonasse a Escola de Jujutsu?'
          },
          {
            title: 'Volume 10',
            image:
              'https://m.media-amazon.com/images/I/61L2aeTkrWL._SY466_.jpg',
            synopsis:
              'Para reaver seu corpo físico, Mekamaru, ou melhor, Kokichi Muta, se alia aos espíritos amaldiçoados. Mas o acordo entre eles é quebrado e o estudante se vê enfrentando Mahito. Será que Muta conseguirá escapar da morte com sua técnica secreta? Enquanto isso, em 31 de outubro, uma cortina recai sobre um distrito de Tokyo, marcando o início do "Incidente em Shibuya'
          }
        ]
      }
    },
    //Naruto Clássico
    {
      name: 'Naruto Classico',
      image: 'https://m.media-amazon.com/images/I/91xUwI2UEVL._SY466_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter((categorie) => categorie.name === 'Mangá')[0]
              .id
          }
        ]
      },
      description:
        'Esta é a Vila Oculta da Folha. Naruto é o garoto mais problemático da Academia Ninja e está sempre aprontando todas!! Seu grande sonho é se tornar um shinobi digno do título de Hokage, o mais forte e respeitado ninja da vila, e superar todos os Hokages anteriores...!! Mas um segredo em torno de seu nascimento o mantém distante tanto de seu sonho quanto das pessoas...!! Não perca mais uma chance de acompanhar a empolgante jornada de Naruto, o garoto ninja que conquistou o mundo inteiro, nesta nova edição de luxo com pôsteres, freetalks exclusivos do autor e muito mais!',
      volumes: {
        create: [
          {
            title: 'Volume 1',
            image:
              'https://m.media-amazon.com/images/I/91xUwI2UEVL._SY466_.jpg',
            synopsis:
              'Esta é a Vila Oculta da Folha. Naruto é o garoto mais problemático da Academia Ninja e está sempre aprontando todas!! Seu grande sonho é se tornar um shinobi digno do título de Hokage, o mais forte e respeitado ninja da vila, e superar todos os Hokages anteriores...!! Mas um segredo em torno de seu nascimento o mantém distante tanto de seu sonho quanto das pessoas...!! Não perca mais uma chance de acompanhar a empolgante jornada de Naruto, o garoto ninja que conquistou o mundo inteiro, nesta nova edição de luxo com pôsteres, freetalks exclusivos do autor e muito mais!'
          },
          {
            title: 'Volume 2',
            image:
              'https://m.media-amazon.com/images/I/81nFG+aE64L._SY466_.jpg',
            synopsis:
              'Naruto, Sasuke e Sakura são testados por Kakashi-sensei!! Se passarem nessa difícil prova, eles se tornarão Genins – ninjas aprendizes! A Equipe Sete parte para assegurar a proteção de um notável construtor de pontes, o senhor Tazuna, mas sinistras sombras assassinas os espreitam!!'
          },
          {
            title: 'Volume 3',
            image:
              'https://m.media-amazon.com/images/I/91H3yNMsx-L._SY466_.jpg',
            synopsis:
              'Zabuza, o demônio que deveria ter sido liquidado pelo sharingan de Kakashi, está vivo! Naruto e seus companheiros, que foram ao País das Ondas escoltando Tazuna, são acometidos por uma imensa sensação de insegurança. Mas não é hora para fraquejar! Sob a supervisão de Kakashi-sensei, um intenso treinamento tem início!'
          },
          {
            title: 'Volume 4',
            image:
              'https://m.media-amazon.com/images/I/91W4LvtL9fL._SY466_.jpg',
            synopsis:
              'Sasuke desmaia ao proteger Naruto...!! Nesse momento, o garoto, tomado por ira e tristeza, sofre uma transformação. O que vai ser de Haku, atingido pelo punho enfurecido de Naruto...?! E que rumo tomará o combate entre Zabuza e Kakashi?! O “arco do País das Ondas” chega a um fim turbulento!!'
          },
          {
            title: 'Volume 5',
            image:
              'https://m.media-amazon.com/images/I/91AvEVbeDhL._SY466_.jpg',
            synopsis:
              'Indicados por Kakashi-sensei, Naruto e seus companheiros de equipe prestarão o Exame Chunin! Sasuke é desafiado para uma batalha antes mesmo de chegar ao local do exame, o que prenuncia um grande tumulto...!! Enfim começam as provas de seleção, reunindo indivíduos estranhos e poderosos...!!'
          },
          {
            title: 'Volume 6',
            image:
              'https://m.media-amazon.com/images/I/91eGstF2vdL._SY466_.jpg',
            synopsis:
              'Começa a segunda prova do Exame Chunin!! Enquanto Naruto e seus amigos batalham por pergaminhos numa floresta sinistra, seres desconhecidos agem secretamente nos bastidores do exame. Qual será o resultado dessa prova cruel, que coloca em jogo a vida de seus participantes...?!'
          },
          {
            title: 'Volume 7',
            image:
              'https://m.media-amazon.com/images/I/91iJ57NlWBL._SY466_.jpg',
            synopsis:
              'Enfrentando a ameaça do trio Otonin, Sasuke, aos poucos, descobre as propriedades do selo amaldiçoado que recebeu de Orochimaru! Enquanto isso, os monitores do Exame Chunin ficam intrigados com Gaara, um ninja de habilidades excepcionais que pode ser bem mais assustador do que aparenta...'
          },
          {
            title: 'Volume 8',
            image:
              'https://m.media-amazon.com/images/I/91hzR0iq04L._SY466_.jpg',
            synopsis:
              'Depois de enfrentar muitos perigos, Naruto e sua equipe chegam ao fim da segunda etapa do Exame Chunin! Antes da terceira fase começar, os examinadores decidem aplicar uma etapa preliminar e eliminatória: os candidatos vão se enfrentar em combates individuais!'
          }
        ]
      }
    },
    //Jogos Vorazes
    {
      name: 'Trilogia Jogos Vorazes',
      image: 'https://m.media-amazon.com/images/I/71WOkspHbOL._SY466_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter(
              (categorie) => categorie.name === 'Fantasia'
            )[0].id
          },
          {
            id: categories.filter((categorie) => categorie.name === 'Drama')[0]
              .id
          }
        ]
      },
      description:
        'KATNISS ESCUTA OS TIROS DE CANHÃO ENQUANTO RASPA O SANGUE DO GAROTO DO DISTRITO 9. Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto. Onze tiros no primeiro dia. Treze jovens restaram, entre eles, Katniss. Para quem os tiros de canhão serão no dia seguinte?...Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte! Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade. Até onde Katniss estará disposta a ir para ser vitoriosa nos Jogos Vorazes?',
      volumes: {
        create: [
          {
            title: 'Jogos Vorazes',
            image:
              'https://m.media-amazon.com/images/I/71WOkspHbOL._SY466_.jpg',
            synopsis:
              'KATNISS ESCUTA OS TIROS DE CANHÃO ENQUANTO RASPA O SANGUE DO GAROTO DO DISTRITO 9. Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto. Onze tiros no primeiro dia. Treze jovens restaram, entre eles, Katniss. Para quem os tiros de canhão serão no dia seguinte?...Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte! Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade. Até onde Katniss estará disposta a ir para ser vitoriosa nos Jogos Vorazes?'
          },
          {
            title: 'Em Chamas',
            image:
              'https://m.media-amazon.com/images/I/71hX09mm4rL._SY466_.jpg',
            synopsis:
              'Depois da improvável e inusitada vitória de Katniss Everdeen e Peeta Mellark nos últimos Jogos Vorazes, algo parece ter mudado para sempre em Panem. Aqui e ali, distúrbios e agitações nos distritos dão sinais de que uma revolta é iminente. Katniss e Peeta, representantes do paupérrimo Distrito 12, não apenas venceram os Jogos, mas ridicularizaram o governo e conseguiram fazer todos – incluindo o próprio Peeta – acreditarem que são um casal apaixonado. A confusão na cabeça de Katniss não é menor do que a das ruas. Em meio ao turbilhão, ela pensa cada vez mais em seu melhor amigo, o jovem caçador Gale, mas é obrigada a fingir que o romance com Peeta é real. Já o governo parece especialmente preocupado com a influência que os dois adolescente vitoriosos – transformados em verdadeiros ídolos nacionais – podem ter na população. Por isso, existem planos especiais para mantê-los sob controle, mesmo que isso signifique forçá-los a lutar novamente'
          },
          {
            title: 'A Esperança',
            image:
              'https://m.media-amazon.com/images/I/71hX09mm4rL._SY466_.jpg',
            synopsis:
              'FINALMENTE A SUBMISSÃO DARÁ LUGAR À LIBERDADE. SERÁ? Depois de sobreviver duas vezes à crueldade de uma arena projetada para destruí-la, Katniss acreditava que não precisaria mais lutar. Mas as regras do jogo mudaram: com a chegada dos rebeldes do lendário Distrito 13, enfim é possível organizar uma resistência. Começou a revolução. A coragem de Katniss nos jogos fez nascer a esperança em um país disposto a fazer de tudo para se livrar da opressão. E agora, contra a própria vontade, ela precisa assumir seu lugar como símbolo da causa rebelde. Ela precisa virar o Tordo. O sucesso da revolução dependerá de Katniss aceitar ou não essa responsabilidade. Será que vale a pena colocar sua família em risco novamente? Será que as vidas de Peeta e Gale serão os tributos exigidos nessa nova guerra? Acompanhe Katniss até o fim deste thriller, numa jornada ao lado mais obscuro da alma humana, em uma luta contra a opressão e a favor da esperança. A esperança é o último livro da trilogia Jogos Vorazes que foi adaptada para o cinema e estrelada por Jennifer Lawrence.'
          }
        ]
      }
    },
    //Cronicas de Gelo e Fogo
    {
      name: 'As Crônicas de Gelo e Fogo',
      image: 'https://m.media-amazon.com/images/I/91eHityofNL._SY466_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter(
              (categorie) => categorie.name === 'Fantasia'
            )[0].id
          },
          {
            id: categories.filter((categorie) => categorie.name === 'Drama')[0]
              .id
          }
        ]
      },
      description:
        'A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones. O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem... e onde um inimigo morto é algo a ser admirado. Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância. Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.',
      volumes: {
        create: [
          {
            title: 'A Guerra Dos Tronos',
            image:
              'https://m.media-amazon.com/images/I/91eHityofNL._SY466_.jpg',
            synopsis:
              'A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones. O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem... e onde um inimigo morto é algo a ser admirado. Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância. Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.'
          },
          {
            title: 'A Fúria dos Reis',
            image:
              'https://m.media-amazon.com/images/I/91N6C0jwzuL._SY466_.jpg',
            synopsis:
              'Nesta emocionante sequência de A guerra dos tronos, George R. R. Martin cria uma obra incomparável. A fúria dos reis nos transporta para um mundo de festas e vinganças, feitiçaria e disputas, diferente de tudo que já foi feito. Um cometa da cor de fogo e sangue corta os céus. E, da antiga cidadela de Pedra do Dragão às costas áridas de Winterfell, reina o caos. Em A fúria dos reis, seis facções disputam o controle de uma terra dividida e o direito de ocupar o Trono de Ferro de Westeros – e estão dispostos a encarar tempestades, levantes e guerras para isso. Nesta história, irmão trama contra irmão e os mortos se levantam para caminhar pela noite. Aqui, uma princesa se disfarça de menino órfão, um cavaleiro se prepara para encarar uma pérfida feiticeira e bárbaros descem das Montanhas da Lua para saquear os campos. Em um contexto de incesto e fratricídio, alquimia e assassinato, a vitória será dos homens e mulheres que possuírem o mais frio aço... e o mais frio coração. Pois, quando se desperta a fúria dos reis, a terra inteira treme.'
          },
          {
            title: 'A Tormenta de Espadas',
            image:
              'https://m.media-amazon.com/images/I/91VVZ-v5GYL._SY466_.jpg',
            synopsis:
              'Este é o terceiro volume da série As Crônicas de Gelo e Fogo, que inclui A guerra dos tronos e A fúria dos reis. Já considerada um clássico, a obra emocionante de George R. R. Martin é um dos maiores feitos da literatura fantástica de todos os tempos. O futuro de Westeros está em jogo, e ninguém descansará até que os Sete Reinos tenham explodido em uma verdadeira tormenta de espadas. Dos cinco pretendentes ao trono, um está morto e outro caiu em desgraça, e ainda assim a guerra continua em toda sua fúria, enquanto alianças são feitas e desfeitas. Joffrey, da Casa Lannister, ocupa o Trono de Ferro, como o instável governante dos Sete Reinos, ao passo que seu rival mais amargo, lorde Stannis, jaz derrotado e enfeitiçado pelas promessas da Mulher Vermelha. O jovem Robb, da Casa Stark, ainda comanda o Norte, contudo, e planeja sua batalha contra os Lannister, mesmo que sua irmã seja refém deles em Porto Real. Enquanto isso, Daenerys Targaryen atravessa um continente deixando um rastro de sangue a caminho de Westeros, levando consigo os três únicos dragões existentes em todo o mundo. Enquanto forças opostas avançam para uma gigantesca batalha final, um exército de selvagens chega dos confins da civilização. Em seu rastro vem uma horda de terríveis criaturas místicas – os Outros: um batalhão de mortos-vivos cujos corpos são imparáveis.'
          },
          {
            title: 'O Festim dos Corvos ',
            image:
              'https://m.media-amazon.com/images/I/814UZhEYFfL._SY466_.jpg',
            synopsis:
              ' O festim dos corvos é o quarto livro da monumental saga de fantasia As Crônicas de Gelo e Fogo, sucesso internacional que deu origem a Game of Thrones. Neste livro, Martin coloca um reino dilacerado à beira da paz... só para ser lançado de novo rumo ao terror e à destruição. Há séculos os sete grandes reinos de Westeros se enfrentam em amargas disputas, batalhas e traições. Agora, com Joffrey Baratheon e Robb Stark fora da jogada e lordes insignificantes competindo pelas Ilhas de Ferro, a guerra que devorou o continente parece ter finalmente chegado ao fim. No entanto, como após todo grande conflito, não demora para que os sobreviventes, os bandidos, os renegados e os carniceiros avancem para disputar o espólio dos mortos. Por toda Westeros os lordes se agitam, formando alianças e fazendo planos, enquanto nomes conhecidos e desconhecidos se apresentam para tomar parte das danças políticas. Todos precisam lançar mão de suas habilidades e poderes para encarar os tempos de terror que se aproximam. Nobres e plebeus, soldados e feiticeiros, assassinos e saqueadores devem arriscar suas fortunas... e suas vidas, pois em um festim de corvos, muitos são os convidados ― e poucos os sobreviventes. '
          },
          {
            title: 'A Dança dos Dragões ',
            image:
              'https://m.media-amazon.com/images/I/91DisjRjFxL._SY466_.jpg',
            synopsis:
              'A dança dos dragões é o quinto livro da saga As Crônicas de Gelo e Fogo, dando continuidade à trama de O festim dos corvos e trazendo personagens novos e conhecidos em disputas acirradas por um reino à beira da ruína.É outono em Westeros, e a Guerra dos Cinco Reis parece finalmente entrar na reta final. Stannis Baratheon se instala no Norte e jura conquistar o apoio dos senhores da região para continuar sua luta pelo trono, embora seja atrapalhado pela invasão de homens de ferro em grande parte da costa. Na Muralha, Jon Snow é eleito o 998º Senhor Comandante da Patrulha da Noite, mas inimigos o cercam de todos os lados, tanto na Patrulha quanto para além da Muralha. Enquanto isso, Tyrion Lannister atravessa o Mar Estreito rumo a Pentos, sem objetivos definidos, sem aliados e cada vez mais sem opções. Na Baía dos Escravos, Daenerys Targaryen conquista a cidade de Meereen e decide ficar e governá-la, praticando as habilidades de liderança que serão tão necessárias quando partir para Westeros. No entanto, sua presença já foi notada por muitos senhores nos Sete Reinos, e das Ilhas de Ferro e de Dorne, de Vilavelha e das Cidades Livres, emissários estão a caminho, querendo se unir à sua causa e, se possível, usá-la para os próprios fins. Em todos os cantos conflitos ganham vida e traições vêm daqueles mais próximos. Guerreiros, selvagens, nobres e escravos – todos têm pela frente um longo inverno, enquanto destino, ambição e política ditam o ritmo da dança mais perigosa de todas.'
          }
        ]
      }
    },
    //Lebron
    {
      name: 'LeBron',
      image: 'https://m.media-amazon.com/images/I/911F9F4qDML._SY466_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter(
              (categorie) => categorie.name === 'Biografia'
            )[0].id
          },
          {
            id: categories.filter(
              (categorie) => categorie.name === 'Administração e Negócios'
            )[0].id
          }
        ]
      },
      description:
        'A biografia definitiva do maior jogador de basquete do século XXI, ícone global e bilionário, baseada em três anos de pesquisa e em mais de 250 entrevistas. São muitas histórias improváveis e fascinantes que fizeram de LeBron James o maior ícone de basquete do século XXI, o maior pontuador da história da NBA e o primeiro jogador da liga a se tornar bilionário. Até mesmo porque o garoto pobre nascido em Akron, Ohio (EUA), filho de mãe solo, poderia ter sido jogador de futebol americano. Mas emergiu como atleta de ensino médio mais disputado do basquete de seu país. Neste livro, o jornalista Jeff Benedict apresenta a série de reveses, triunfos e a persistência que fizeram de LeBron o campeão da NBA, sucessor de Michael Jordan e ícone global. É um livro que vai muito além do esporte, com lições inspiradoras sobre liderança e marketing — mostrando, por exemplo, os bastidores da disputa milionária entre Nike, Adidas e Reebok para patrocinar o jovem LeBron de 18 anos. Os leitores também descobrirão como o jogador aprendeu a lidar com a pressão, impôs um estilo de jogo que valorizou o coletivo e construiu um time dos sonhos por onde passou.',
      volumes: {
        create: [
          {
            title: 'LeBron',
            image:
              'https://m.media-amazon.com/images/I/911F9F4qDML._SY466_.jpg',
            synopsis:
              'A biografia definitiva do maior jogador de basquete do século XXI, ícone global e bilionário, baseada em três anos de pesquisa e em mais de 250 entrevistas. São muitas histórias improváveis e fascinantes que fizeram de LeBron James o maior ícone de basquete do século XXI, o maior pontuador da história da NBA e o primeiro jogador da liga a se tornar bilionário. Até mesmo porque o garoto pobre nascido em Akron, Ohio (EUA), filho de mãe solo, poderia ter sido jogador de futebol americano. Mas emergiu como atleta de ensino médio mais disputado do basquete de seu país. Neste livro, o jornalista Jeff Benedict apresenta a série de reveses, triunfos e a persistência que fizeram de LeBron o campeão da NBA, sucessor de Michael Jordan e ícone global. É um livro que vai muito além do esporte, com lições inspiradoras sobre liderança e marketing — mostrando, por exemplo, os bastidores da disputa milionária entre Nike, Adidas e Reebok para patrocinar o jovem LeBron de 18 anos. Os leitores também descobrirão como o jogador aprendeu a lidar com a pressão, impôs um estilo de jogo que valorizou o coletivo e construiu um time dos sonhos por onde passou.'
          }
        ]
      }
    },
    //Harry Potter
    {
      name: 'Harry Potter',
      image: 'https://m.media-amazon.com/images/I/61jgm6ooXzL._SY466_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter(
              (categorie) => categorie.name === 'Ficção Científica'
            )[0].id
          }
        ]
      },
      description:
        'Deveria ser um livro só para o público infanto-juvenil. Mas, no mundo inteiro, gente de idades variadas lê Harry Potter - um fenômeno da literatura mundial que desafia crenças e estimativas. Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo.No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer, ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo. Harry Potter conduz a discussões metafísicas, aborda o eterno confronto entre o bem e o mal, evidencia algumas mazelas da sociedade, como o preconceito, a divisão de classes através do dinheiro e do berço, a inveja, o egoísmo, a competitividade exacerbada, a busca pelo ideal - a necessidade de aprender, nem que seja à força, que a vida é feita de derrotas e vitórias e que isso é importante para a formação básica de um adulto.',
      volumes: {
        create: [
          {
            title: 'Harry Potter e a Pedra Filosofal',
            image:
              'https://m.media-amazon.com/images/I/61jgm6ooXzL._SY466_.jpg',
            synopsis:
              'Deveria ser um livro só para o público infanto-juvenil. Mas, no mundo inteiro, gente de idades variadas lê Harry Potter - um fenômeno da literatura mundial que desafia crenças e estimativas. Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo.No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer, ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo. Harry Potter conduz a discussões metafísicas, aborda o eterno confronto entre o bem e o mal, evidencia algumas mazelas da sociedade, como o preconceito, a divisão de classes através do dinheiro e do berço, a inveja, o egoísmo, a competitividade exacerbada, a busca pelo ideal - a necessidade de aprender, nem que seja à força, que a vida é feita de derrotas e vitórias e que isso é importante para a formação básica de um adulto.'
          },
          {
            title: 'Harry Potter e a Camara Secreta',
            image:
              'https://m.media-amazon.com/images/I/71NsVQ5MlwL._SY466_.jpg',
            synopsis:
              'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, nosso herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e...um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranqüilidade dos membros de Hogwarts. Como eliminar definitivamente esse mal e restaurar a paz na escola?'
          },
          {
            title: 'Harry Potter e o Prisioneiro de Askaban',
            image:
              'https://m.media-amazon.com/images/I/81QnqHwRiUL._SY466_.jpg',
            synopsis:
              'As aulas estão de volta a Hogwarts e Harry Potter não vê a hora de embarcar no Expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros, 4, foi triste e solitária. Tio Válter Dursley estava especialmente irritado com ele, porque seu amigo Rony Weasley tinha lhe telefonado. E ele não aceitava qualquer ligação de Harry com o mundo dos mágicos dentro de sua casa. A situação piorou ainda mais com a chegada de tia Guida, irmã de Válter. Harry já estava acostumado a ser humilhado pelos Dursley, mas quando tia Guida passou a ofender os pais de Harry, mortos pelo bruxo Voldemort, ele não agüentou e transformou-a num imenso balão. Irritado, fugiu da casa dos tios, indo se abrigar no Beco Diagonal. Lá ele reencontra Rony e Hermione, seus melhores amigos em Hogwarts e, para sua surpresa, é procurado pelo próprio Ministro da Magia. Sem que Harry saiba, o ministro está preocupado com o garoto, pois fugiu da prisão de Azkaban o perigoso bruxo Sirius Black, que teria assassinado treze pessoas com um único feitiço e traído os pais de Harry, entregando-os a Voldemort. Sob forte escolta, o garoto é levado para Hogwarts. Na escola as dificuldades são as de sempre: Severo Snape, o professor de Poções, o trata cada vez pior, enquanto ele tem de se esforçar nos treinos de quadribol, e levar Grifinória à vitória do campeonato. Para piorar a situação, os terríveis guardas de Azkaban, conhecidos por dementadores, estão de guarda nos portões da escola, caso Sirius Black tente algo contra Harry. Por fim, Harry tem de enfrentar seu inimigo para salvar Rony e obrigado a escolher entre matar ou não aquele que traiu seus pais. Com muita ação, humor e magia, Harry Potter e o prisioneiro de Azkaban traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.'
          },
          {
            title: 'Harry Potter e o Cálice de Fogo',
            image:
              'https://m.media-amazon.com/images/I/8172dLr8Z7L._SY466_.jpg',
            synopsis:
              'Verão, Harry Potter, agora com 14 anos, sente sua cicatriz arder durante um sonho bastante real com Lord Voldemort, o qual não consegue esquecer, três dias depois, já em companhia da família Weasley, com quem foi passar o restante das férias, na final da Copa Mundial de Quadribol, os Comensais da Morte, seguidores de Você-Sabe-Quem, reaparecem e alguém conjura a Marca Negra ? o sinal de Lord Voldemort ? projetando-a no céu pela primeira vez em 13 anos, causando pânico na comunidade mágica. Será que o terrível bruxo está voltando? Tudo indica que sim...O ano letivo já começa agitado. Harry volta para a Escola de Magia e Bruxaria de Hogwarts para cursar a quarta série. Acontecimentos inesperados ? como, por exemplo, a presença de um novo professor de Defesa contra as Artes das Trevas e um evento extraordinário promovido na escola ? alvoroçam os ânimos dos estudantes. Para surpresa de todos não haverá a tradicional Copa Anual de Quadribol entre Casas. Será substituída pelo Torneio Tribuxo, uma competição amistosa entre as três maiores escolas européias de bruxaria ? Hogwarts, Beauxbatons e Durmstrang ? que não se realizava havia um século. A competição é dividida em tarefas, cuja finalidade é testar a coragem, o poder de dedução, a perícia em magia e a capacidade de enfrentar o perigo dos campeões. Liderados pelo professor Dumbledore, os alunos de Hogwarts terão de demonstrar todas as habilidade mágicas e não-mágicas que vêm adquirindo ao longo de suas vidas. Apesar de alunos menores de 17 anos não poderem se inscrever no Torneio, inexplicavelmente Harry é escolhido pelo Cálice de Fogo, um grande copo de madeira toscamente talhado cheio até a borda com chamas branco-azuladas, para competir como um dos campeões de Hogwarts.'
          },
          {
            title: 'Harry Potter e a Ordem da Fenix',
            image:
              'https://m.media-amazon.com/images/I/81RI+iGwPGL._SY466_.jpg',
            synopsis: `Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranha família no mundo dos 'trouxas'. Também continua contando com Rony Weasley e Hermione Granger, seus melhores amigos em Hogwarts, para levar adiante suas investigações e aventuras. Mas o bruxinho começa a sentir e descobrir coisas novas, como o primeiro amor e a sexualidade. Nos volumes anteriores, J. K. Rowling mostrou como Harry foi transformado em celebridade no mundo da magia por ter derrotado, ainda bebê, Voldemort, o todopoderoso bruxo das trevas que assassinou seus pais. Neste quinto livro da saga, o protagonista, numa crise típica da adolescência, tem ataques de mau humor com a perseguição da imprensa, que o segue por todos os lugares e chega a inventar declarações que nunca deu. Harry vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o diretor de Hogwarts é afastado da escola. E vai ser sem a ajuda de seu protetor que o jovem herói enfrentará descobertas sobre a personalidade controversa de seu pai, Tiago Potter, e a morte de alguém muito próximo.`
          },
          {
            title: 'Harry Potter e o Enigma do Príncipe',
            image:
              'https://m.media-amazon.com/images/I/81-jvnt+hgL._SY466_.jpg',
            synopsis: `Esta é a continuidade à saga do jovem bruxo Harry Potter a partir do ponto em que o livro anterior parou - o momento em que fica provado que o poder de Voldemort e dos Comensais da Morte, seus seguidores, cresce mais a cada dia, em meio à batalha entre o bem e o mal. A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (não-bruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que 'sugam' a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica. Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito - o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período. Apesar de tudo isso, Harry e os amigos são adolescentes típicos - dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram.`
          },
          {
            title: 'Harry Potter e as Relíquias da Morte',
            image:
              'https://m.media-amazon.com/images/I/81PHloIwKnL._SY466_.jpg',
            synopsis: `Em Harry Potter e as Relíquias da Morte, o encontro inevitável com Lord Voldemort não pode mais ser adiado. Harry, no entanto, precisa ganhar tempo para encontrar as Horcruxes que ainda estão faltando. E, pelo caminho, descobrir o que são afinal as Relíquias da Morte e como ele pode usá-las contra o Lorde das Trevas. Seguindo as poucas pistas deixadas por Dumbledore, Harry conta apenas com a ajuda dos leais amigos Rony e Hermione.Juntos, eles percorrem lugares nunca visitados, descobrem histórias nebulosas sobre pessoas queridas e acabam por desvendar mistérios que os incomodavam há muito tempo. Enquanto Harry, Rony e Hermione vagam por diferentes lugares em busca de pistas, J. K. Rowling vai revelando aspectos até então desconhecidos sobre os principais personagens.Em sua última e derradeira aventura, Harry não é exposto apenas a batalhas. Ele precisa superar traições, surpresas e, mais do que nunca, aprender a lidar com os próprios sentimentos. Como em todos os livros da série, o amor e a amizade são elementos-chave para a trama. Em Harry Potter e as Relíquias da Morte, J. K. Rowling leva o leitor por uma trilha de suspense, com sustos ininterruptos até a última página, quando entrega, por completo, toda a verdade e conclui os passos de herói de Harry Potter na maior saga bruxa de todos os tempos.`
          }
        ]
      }
    },
    //Senhor dos Aneis
    {
      name: 'O Senhor dos Aneis',
      image: 'https://m.media-amazon.com/images/I/81MZ8OjmQrL._SY466_.jpg',
      categories: {
        connect: [
          {
            id: categories.filter(
              (categorie) => categorie.name === 'Fantasia'
            )[0].id
          },
          {
            id: categories.filter((categorie) => categorie.name === 'Drama')[0]
              .id
          }
        ]
      },
      description: `Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.
      A Sociedade do Anel é a primeira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.
      É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”.
      Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal. `,
      volumes: {
        create: [
          {
            title: 'A Sociedade do Anel',
            image:
              'https://m.media-amazon.com/images/I/81MZ8OjmQrL._SY466_.jpg',
            synopsis: `Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.
            A Sociedade do Anel é a primeira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.
            É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”.
            Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal. `
          },
          {
            title: 'O Senhor dos Anéis As Duas Torres',
            image:
              'https://m.media-amazon.com/images/I/81v5OmfTvEL._SY466_.jpg',
            synopsis: `A Comitiva do Anel se divide. Frodo e Sam continuam a viagem, descendo sozinhos o Grande Rio Anduin ? mas não tão sozinhos assim, pois uma figura misteriosa segue todos os seus passos...
            As Duas Torres é a segunda parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.
            É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”.
            Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal.`
          },
          {
            title: 'O Senhor dos Anéis O Retorno do rei',
            image:
              'https://m.media-amazon.com/images/I/71SuFTR7OIL._SY466_.jpg',
            synopsis: `A sombra dos exércitos do Senhor do Escuro cresce cada vez mais. Homens, anões e elfos unem-se para lutar contra a Escuridão. Enquanto isso, Frodo e Sam penetram na terra de Mordor, em sua empreitada heroica para destruir o Anel.
            O Retorno do Rei é a terceira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.
            É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”.
            Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal.`
          }
        ]
      }
    }
  ];

  console.log('Creating collections...');

  const promises = data.map(
    (collection) =>
      new Promise((resolve, reject) =>
        resolve(prisma.collection.create({ data: { ...collection } }))
      )
  );

  Promise.all(promises);

  console.log('Setup completed 👌');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
