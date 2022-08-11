import { ShoppingCart } from 'phosphor-react'
import { useCallback, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext, ProductProps } from '../../contexts/CartContext'
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

export function Card(props: ProductProps) {
  const navigate = useNavigate()
  const { cart, addProduct } = useContext(CartContext)

  const handleAddProduct = (data: ProductProps) => {
    console.log('1')
    addProduct(data)
  }

  const amount = useCallback(
    (id: number) => {
      if (cart) {
        const item = cart.items.find((item) => item.productId === id)
        return item ? item.amount : 0
      }
      return 0
    },
    [cart],
  )

  return (
    <Item>
      <img src={props.imgUrl} alt={`Copo de café ${props.title}`} />
      <Tags>
        {props.tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </Tags>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Footer>
        <Price>
          <span>R$</span>
          <span>{props.price}</span>
        </Price>
        <Amount>
          <button>-</button>
          <span>{amount(props.id)}</span>
          <button onClick={() => handleAddProduct(props)}>+</button>
        </Amount>
        <ButtonCart onClick={() => navigate('/checkout')}>
          <ShoppingCart weight="fill" />
        </ButtonCart>
      </Footer>
    </Item>
  )
}
