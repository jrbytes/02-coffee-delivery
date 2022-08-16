import { ShoppingCart } from 'phosphor-react'
import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { ProductProps } from '../../reducers/cart/reducer'
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
  const { cartState, addProduct, removeProduct } = useContext(CartContext)
  const { cart, orderReceivedSuccessfully } = cartState

  const handleAddProduct = (data: ProductProps) => {
    if (orderReceivedSuccessfully) {
      return
    }

    addProduct(data)
  }

  const handleRemoveProduct = (data: ProductProps) => {
    if (orderReceivedSuccessfully) {
      return
    }

    removeProduct(data)
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

  const formatPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(parseFloat(props.price))
    .replace('R$', '')

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
          <span>{formatPrice}</span>
        </Price>
        <Amount orderReceivedSuccessfully={orderReceivedSuccessfully}>
          <button onClick={() => handleRemoveProduct(props)}>-</button>
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
