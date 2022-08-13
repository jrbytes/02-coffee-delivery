import { useContext, useMemo } from 'react'
import * as S from './styles'
import { CartContext, ProductProps } from '../../../../contexts/CartContext'
import { Link } from 'react-router-dom'

type ProductMemoizedProps = {
  product: ProductProps
  amount: number
  total: string
}

export function Cart() {
  const { cart, products, addProduct, removeProduct } = useContext(CartContext)

  const memoizedItems = useMemo(() => {
    return cart?.items.map((item) => ({
      product: { ...products.find((product) => product.id === item.productId) },
      amount: item.amount,
      total: item.total,
    }))
  }, [cart?.items, products]) as ProductMemoizedProps[]

  const handleAddProduct = (id: string) => {
    const product = products.find((product) => product.id === parseInt(id))
    if (product) {
      addProduct(product)
    }
  }

  const handleRemoveProduct = (id: string) => {
    const product = products.find((product) => product.id === parseInt(id))
    if (product) {
      removeProduct(product)
    }
  }

  const totalItems =
    cart &&
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(cart.totalCart))
  const frete = 7.99
  const total =
    cart &&
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(cart.totalCart) + frete)

  return (
    <S.Cart>
      {cart && cart.items.length > 0 ? (
        <>
          {memoizedItems.map((item) => (
            <S.Item key={item.product.id}>
              <S.ItemInfo>
                <img src={item.product.imgUrl} alt="" />
                <div>
                  <p>{item.product.title}</p>
                  <S.ItemButtons>
                    <div>
                      <S.MinusButton
                        onClick={() =>
                          handleRemoveProduct(String(item.product.id))
                        }
                      >
                        -
                      </S.MinusButton>
                      <span>{item.amount}</span>
                      <S.MoreButton
                        onClick={() =>
                          handleAddProduct(String(item.product.id))
                        }
                      >
                        +
                      </S.MoreButton>
                    </div>
                    {/* <S.RemoveButton>
                      <Trash size={16} />
                      remover
                    </S.RemoveButton> */}
                  </S.ItemButtons>
                </div>
              </S.ItemInfo>
              <S.ItemPrice>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(parseFloat(item.total))}
              </S.ItemPrice>
            </S.Item>
          ))}

          <S.AccountStatement>
            <div>
              <p>
                Valor total dos itens <span>{totalItems}</span>
              </p>
              <p>
                Entrega{' '}
                <span>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(frete)}
                </span>
              </p>
              <p>
                Total <span>{total}</span>
              </p>
            </div>
            <button>confirmar pedido</button>
          </S.AccountStatement>
        </>
      ) : (
        <S.EmptyCart>
          <p>Seu carrinho está vazio</p>
          <Link to="/">Voltar à página inicial</Link>
        </S.EmptyCart>
      )}
    </S.Cart>
  )
}
