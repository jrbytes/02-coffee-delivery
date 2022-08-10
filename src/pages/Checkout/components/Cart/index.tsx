import { Trash } from 'phosphor-react'
import * as S from './styles'
import expressoTradicional from '../../../../assets/expresso-tradicional.png'

export function Cart() {
  return (
    <S.Cart>
      <S.Item>
        <S.ItemInfo>
          <img src={expressoTradicional} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <S.ItemButtons>
              <div>
                <S.MinusButton>-</S.MinusButton>
                <span>0</span>
                <S.MoreButton>+</S.MoreButton>
              </div>
              <S.RemoveButton>
                <Trash size={16} />
                remover
              </S.RemoveButton>
            </S.ItemButtons>
          </div>
        </S.ItemInfo>
        <S.ItemPrice>R$ 9,90</S.ItemPrice>
      </S.Item>

      <S.Item>
        <S.ItemInfo>
          <img src={expressoTradicional} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <S.ItemButtons>
              <div>
                <S.MinusButton>-</S.MinusButton>
                <span>0</span>
                <S.MoreButton>+</S.MoreButton>
              </div>
              <S.RemoveButton>
                <Trash size={16} />
                remover
              </S.RemoveButton>
            </S.ItemButtons>
          </div>
        </S.ItemInfo>
        <S.ItemPrice>R$ 9,90</S.ItemPrice>
      </S.Item>

      <S.AccountStatement>
        <div>
          <p>
            Valor total dos itens <span>R$ 29,70</span>
          </p>
          <p>
            Entrega <span>R$ 3,50</span>
          </p>
          <p>
            Total <span>R$ 33,20</span>
          </p>
        </div>
        <button>confirmar pedido</button>
      </S.AccountStatement>
    </S.Cart>
  )
}
