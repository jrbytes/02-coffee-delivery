import { Intro } from '../../components/Intro'
import { CoffeeList } from '../../components/CoffeeList'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Home() {
  const { cartState } = useContext(CartContext)
  console.log('carrinho', cartState)
  return (
    <>
      <Intro />
      <CoffeeList />
    </>
  )
}
