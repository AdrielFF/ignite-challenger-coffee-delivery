import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  selected?: boolean
  handleClickEvent: () => void
}

export function Button({
  children,
  variant = 'primary',
  selected = false,
  handleClickEvent,
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={handleClickEvent}
      selected={selected}
      variant={variant}
    >
      {children}
    </ButtonContainer>
  )
}
