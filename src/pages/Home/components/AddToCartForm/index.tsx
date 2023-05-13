import { ShoppingCart } from 'phosphor-react'
import { NumberInput } from '../../../../components/NumberInput/index'
import { SquircleIcon } from '../../../../components/SquircleIcon/index'
import { useContext, useState } from 'react'
import { CoffeeDataType } from '../CoffeeList/data'
import { CartContext } from '../../../../contexts/CartContext'

interface AddToCartFormProps {
  product: CoffeeDataType
}

export function AddToCartForm({ product }: AddToCartFormProps) {
  const [inputValue, setInputValue] = useState(1)

  const { addNewItemToCart } = useContext(CartContext)

  function updateInputValue(newValue: number) {
    setInputValue(newValue)
  }

  function handleAddToCart() {
    addNewItemToCart({ ...product, quantity: inputValue })

    setInputValue(1)
  }

  return (
    <>
      <NumberInput
        inputValue={inputValue}
        updateInputValue={updateInputValue}
      />
      <button title="Adicionar ao carrinho" onClick={handleAddToCart}>
        <SquircleIcon background="purple-dark" color="base-card">
          <ShoppingCart size={22} weight="fill" />
        </SquircleIcon>
      </button>
    </>
  )
}
