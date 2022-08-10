import { MapPinLine } from 'phosphor-react'
import * as S from './styles'

export function Address() {
  return (
    <S.Address>
      <S.Header>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </S.Header>
      <form action="">
        <S.InputCep type="text" placeholder="CEP" /> <br />
        <S.InputRua type="text" placeholder="Rua" /> <br />
        <S.InputNumero type="text" placeholder="Número" />
        <S.InputComplemento type="text" placeholder="Complemento" /> <br />
        <S.InputBairro type="text" placeholder="Bairro" />
        <S.InputCidade type="text" placeholder="Cidade" />
        <S.InputUf type="text" placeholder="UF" />
      </form>
    </S.Address>
  )
}
