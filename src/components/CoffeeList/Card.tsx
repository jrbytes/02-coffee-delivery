import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import {
  Amount,
  ButtonCart,
  Description,
  Footer,
  Item,
  Price,
  Tags,
  Title,
} from './styles'

type TagProps = {
  id: number
  name: string
}

interface Props {
  imgUrl: string
  title: string
  description: string
  price: string
  available: number
  tags: TagProps[]
}

export function Card({
  imgUrl,
  title,
  description,
  price,
  available,
  tags,
}: Props) {
  const navigate = useNavigate()

  // adicionar available em amount, nao permitir mais que available

  return (
    <Item>
      <img src={imgUrl} alt={`Copo de café ${title}`} />
      <Tags>
        {tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <Price>
          <span>R$</span>
          <span>{price}</span>
        </Price>
        <Amount>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </Amount>
        <ButtonCart onClick={() => navigate('/checkout')}>
          <ShoppingCart weight="fill" />
        </ButtonCart>
      </Footer>
    </Item>
  )
}
