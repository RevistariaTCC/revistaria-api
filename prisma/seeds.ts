import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  console.log('Starting seeds 🚀');
  console.log('Creating categories...');
  const categories = [
    'Romance',
    'Literatura Crianças 5-8 Anos',
    'Literatura Crianças 8-11 Anos',
    'Autoajuda',
    'Desenvolvimento Pessoal',
    'Cristianismo',
    'Policial e Suspense',
    'Biografias e Memórias',
    'Histórias em Quadrinhos',
    'Ficção Científica e Fantasia',
    'Contos e Crônicas',
    'Filosofia',
    'Poesia',
    'Administração Geral',
    'Espiritualismo',
    'Religião Geral',
    'Cursos de Inglês',
    'Pedagogia',
    'Psicologia e Psicanálise',
    'Sociologia',
    'Literatura Crianças 3-5 Anos',
    'Culinária',
    'Política e Atualidades',
    'Medicina Geral',
    'Teatro',
    'Crítica e Teoria Literária',
    'História Mundial',
    'Esoterismo',
    'Direito Civil',
    'Comunicação',
    'Esportes e Lazer',
    'Relações Interpessoais',
    'Teoria e História da Arte',
    'Pintura e Desenho',
    'Literatura Crianças Até 3 Anos',
    'Matemática',
    'Terror',
    'Contabilidade Geral',
    'Antropologia',
    'Música',
    'Cursos de Outras Línguas',
    'Administração e Matemática Financeiras',
    'Teoria Econômica',
    'Ensaios',
    'Redação',
    'Botânica',
    'Direito Administrativo',
    'Arquitetura, Urbanismo e Paisagismo',
    'Guias de viagens',
    'Fotografia',
    'Dietas',
    'Química',
    'Direito Constitucional',
    'História do Brasil',
    'Administração de Rh e Terceirização',
    'Economia Brasileira',
    'Bíblias',
    'Profissionalizantes',
    'Natureza e Ecologia',
    'Física',
    'Teologia',
    'Moda',
    'Ciências Biológicas',
    'Humor',
    'Economia Internacional',
    'Direito Penal',
    'Cinema',
    'Cursos de Espanhol',
    'Serviço Social',
    'Português',
    'Direito Processual Civil',
    'Comportamento',
    'Nutrição',
    'Enfermagem',
    'Budismo',
    'Bebidas',
    'Ensino Fundamental I',
    'Engenharia Civil',
    'Biologia',
    'Análise de Sistemas',
    'Tecnologia',
    'Pediatria e Puericultura',
    'Odontologia',
    'Futebol',
    'Filosofia do Direito',
    'Direito Comercial',
    'Administração de Produção',
    'Psiquiatria',
    'Literatura Juvenil',
    'Geografia Mundial',
    'Estatística',
    'Cães',
    'Artesanato',
    'Sexologia',
    'Introdução Estudo do Direito',
    'Geologia',
    'Engenharia Elétrica',
    'Direito Tributário',
    'Direito do Trabalho',
    'Atletismo',
    'Geografia do Brasil',
    'Ensino Fundamental II',
    'Engenharia Mecânica',
    'Dicionários Técnicos',
    'Contabilidade de Custos',
    'Agricultura',
    'Redes',
    'Livros para Colorir',
    'Linguagens',
    'Escultura',
    'Direito Internacional',
    'Decoração',
    'Computação Gráfica',
    'Auditoria',
    'Zoologia',
    'Xadrez',
    'Natação',
    'Judaísmo',
    'Inglês e Inglês-Português',
    'Fonoaudiologia',
    'Direito Processual Penal',
    'Direito Financeiro',
    'Dança',
    'Veterinária',
    'RPG',
    'Língua Portuguesa',
    'Ginástica',
    'Folclore',
    'Fisioterapia',
    'Farmacologia',
    'Ensino Médio',
    'Engenharia Eletrônica',
    'Direito Eleitoral',
    'Basquetebol',
    'Automobilismo',
    'Astronomia',
    'Álbuns de Figurinhas',
    'Volume Único - Ensino Médio',
    'Sistemas Operacionais',
    'Programas',
    'Multimídia',
    'Guias de conversação',
    'Eróticos',
    'Engenharia Química',
    'Direito Previdenciário',
    'Cursos de Alemão',
    'Comércio Exterior',
    'Biblioteconomia',
    'Artes Marciais',
    'Tênis',
    'Oratória',
    'Hardware',
    'Espanhol e Espanhol-Português',
    'Engenharia Metalúrgica',
    'Engenharia Hidráulica',
    'Engenharia da Computação',
    'Educação Infantil Pré - escola',
    'Cursos de Francês',
    'Banco de Dados',
    'Alfabetização',
    'Alemão e Alemão-Português',
    'Administração e Negócios'
  ];

  await prisma.category.createMany({
    data: categories.map((category) => ({ name: category }))
  });

  console.log('Creating collections...');
  const collection = await prisma.collection.create({
    data: {
      name: 'Jujutsu Kaisen',
      image:
        'https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg',
      categories: {
        create: {
          name: 'mangá'
        }
      }
    }
  });

  console.log('Creating volumes...');

  const volumes = [
    {
      title: 'Volume 0',
      image: 'https://m.media-amazon.com/images/I/71sicR3ldaL._SL1459_.jpg'
    },
    {
      title: 'Volume 1',
      image:
        'https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Volume 2',
      image: 'https://m.media-amazon.com/images/I/91MAequ2koL._SL1500_.jpg'
    },
    {
      title: 'Volume 3',
      image: 'https://m.media-amazon.com/images/I/51whdHRS4LL._SY445_SX342_.jpg'
    },
    {
      title: 'Volume 4',
      image: 'https://m.media-amazon.com/images/I/71VS-OuXOjL._SL1459_.jpg'
    },
    {
      title: 'Volume 5',
      image: 'https://m.media-amazon.com/images/I/71c-+BcZ-eL._SL1459_.jpg'
    }
  ];

  await prisma.volume.createMany({
    data: volumes.map((volume) => ({ ...volume, collectionId: collection.id }))
  });

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
