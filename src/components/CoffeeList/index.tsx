import { Container, Content } from './styles'
import { Card } from './Card'
import { coffee } from './data'

export function CoffeeList() {
  return (
    <Container>
      <h2>Nossos cafés</h2>

      <Content>
        {coffee.map((item) => (
          <Card
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            amount={item.amount}
            tags={[item.tags]}
          />
        ))}
      </Content>
    </Container>
  )
}
