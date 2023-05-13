import { Minus, Plus } from 'phosphor-react'
import { NumberInputContainer } from './styles'
import { ChangeEvent } from 'react'

interface NumberInputProps {
  updateInputValue: (newValue: number) => void
  inputValue: number
}

export function NumberInput({
  updateInputValue,
  inputValue,
}: NumberInputProps) {
  function handleIncreaseInputValue() {
    const nextValue = inputValue + 1
    if (nextValue <= 10) {
      updateInputValue(inputValue + 1)
    }
  }

  function handleDecreaseInputValue() {
    const nextValue = inputValue - 1
    if (nextValue > 0) {
      updateInputValue(inputValue - 1)
    }
  }

  function handleQuantityInputChange(e: ChangeEvent<HTMLInputElement>) {
    updateInputValue(Number(e.target.value))
  }

  return (
    <NumberInputContainer>
      <Minus size={14} onClick={handleDecreaseInputValue} />
      <input
        type="number"
        min={1}
        max={10}
        value={inputValue}
        onChange={handleQuantityInputChange}
      />
      <Plus size={14} onClick={handleIncreaseInputValue} />
    </NumberInputContainer>
  )
}
