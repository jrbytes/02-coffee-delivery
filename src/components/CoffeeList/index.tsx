import { useContext } from 'react'
import { Container, Content } from './styles'
import { Card } from './Card'
import { CartContext } from '../../contexts/CartContext'

export function CoffeeList() {
  const { products } = useContext(CartContext)

  return (
    <Container>
      <h2>Nossos cafés</h2>

      <Content>
        {products?.map((item) => (
          <Card
            key={item.id}
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
