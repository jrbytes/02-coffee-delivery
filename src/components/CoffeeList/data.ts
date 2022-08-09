import expressoTradicional from '../../assets/expresso-tradicional.png'
import expressoAmericano from '../../assets/expresso-americano.png'

export const coffee = [
  {
    id: 1,
    imgUrl: expressoTradicional,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    amount: 1,
    tags: {
      id: 1,
      name: 'Tradicional',
    },
  },
  {
    id: 2,
    imgUrl: expressoAmericano,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    amount: 1,
    tags: {
      id: 1,
      name: 'Tradicional',
    },
  },
]
