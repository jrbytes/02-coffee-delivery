import expressoTradicional from '../assets/expresso-tradicional.png'
import expressoAmericano from '../assets/expresso-americano.png'
import expressoCremoso from '../assets/expresso-cremoso.png'
import expressoGelado from '../assets/expresso-gelado.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mocaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const coffee = [
  {
    id: 1,
    imgUrl: expressoTradicional,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
  },
  {
    id: 2,
    imgUrl: expressoAmericano,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
  },
  {
    id: 3,
    imgUrl: expressoCremoso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
  },
  {
    id: 4,
    imgUrl: expressoGelado,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'Gelado',
      },
    ],
  },
  {
    id: 5,
    imgUrl: cafeComLeite,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'Com Leite',
      },
    ],
  },
  {
    id: 6,
    imgUrl: latte,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'Com Leite',
      },
    ],
  },
  {
    id: 7,
    imgUrl: capuccino,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'Com Leite',
      },
    ],
  },
  {
    id: 8,
    imgUrl: macchiato,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'Com Leite',
      },
    ],
  },
  {
    id: 9,
    imgUrl: mocaccino,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
      {
        id: 2,
        name: 'Com Leite',
      },
    ],
  },
  {
    id: 10,
    imgUrl: chocolateQuente,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Especial',
      },
      {
        id: 2,
        name: 'Com Leite',
      },
    ],
  },
  {
    id: 11,
    imgUrl: cubano,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Especial',
      },
      {
        id: 2,
        name: 'Alcoólico',
      },
      {
        id: 3,
        name: 'Gelado',
      },
    ],
  },
  {
    id: 12,
    imgUrl: havaiano,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Especial',
      },
    ],
  },
  {
    id: 13,
    imgUrl: arabe,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Especial',
      },
    ],
  },
  {
    id: 14,
    imgUrl: irlandes,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    available: 10,
    tags: [
      {
        id: 1,
        name: 'Especial',
      },
      {
        id: 2,
        name: 'Alcoólico',
      },
    ],
  },
]
