import {
  Container,
  Wrapper,
  Content,
  Image,
  Tips,
  Item1,
  Item2,
  Item3,
  Item4,
} from './styles'
import coffeeImage from '../../assets/img-coffee.png'
import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h4>Encontre o café perfeito para qualquer hora do dia</h4>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, <br /> a
            qualquer hora
          </p>
          <Tips>
            <Item1>
              <span>
                <ShoppingCart weight="fill" size={14} />
              </span>
              Compra simples e segura
            </Item1>
            <Item3>
              <span>
                <Cube weight="fill" size={14} />
              </span>
              Embalagem mantém o café intacto
            </Item3>
            <Item2>
              <span>
                <Timer weight="fill" size={14} />
              </span>
              Entrega rápida e rastreada
            </Item2>
            <Item4>
              <span>
                <Coffee weight="fill" size={14} />
              </span>
              O café chega fresquinho até você
            </Item4>
          </Tips>
        </Content>
        <Image src={coffeeImage} alt="Copo de cafe e grãos de café" />
      </Wrapper>
    </Container>
  )
}
