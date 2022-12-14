import { useContext } from 'react'
import { Container, Content } from './styles'
import { Card } from './Card'
import { CartContext } from '../../contexts/CartContext'

export function CoffeeList() {
  const { cartState } = useContext(CartContext)
  const products = cartState.products

  return (
    <Container>
      <h2>Nossos cafés</h2>

      <Content>
        {products?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            available={item.available}
            tags={item.tags}
          />
        ))}
      </Content>
    </Container>
  )
}
