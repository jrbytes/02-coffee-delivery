import * as S from './styles'
import coffeeImage from '../../assets/img-coffee.png'
import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <h4>Encontre o café perfeito para qualquer hora do dia</h4>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, <br /> a
            qualquer hora
          </p>
          <S.Tips>
            <S.Item1>
              <span>
                <ShoppingCart weight="fill" size={14} />
              </span>
              Compra simples e segura
            </S.Item1>
            <S.Item3>
              <span>
                <Cube weight="fill" size={14} />
              </span>
              Embalagem mantém o café intacto
            </S.Item3>
            <S.Item2>
              <span>
                <Timer weight="fill" size={14} />
              </span>
              Entrega rápida e rastreada
            </S.Item2>
            <S.Item4>
              <span>
                <Coffee weight="fill" size={14} />
              </span>
              O café chega fresquinho até você
            </S.Item4>
          </S.Tips>
        </S.Content>
        <S.Image src={coffeeImage} alt="Copo de cafe e grãos de café" />
      </S.Wrapper>
    </S.Container>
  )
}
