import { Intro } from '../../components/Intro'
import { CoffeeList } from '../../components/CoffeeList'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Home() {
  const { cart } = useContext(CartContext)
  console.log('carrinho', cart)
  return (
    <>
      <Intro />
      <CoffeeList />
    </>
  )
}
