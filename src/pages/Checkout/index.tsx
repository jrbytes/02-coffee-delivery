import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <div>
        <h3>Complete seu pedido</h3>
        <Address />
        <Payment />
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <Cart />
      </div>
    </Container>
  )
}
