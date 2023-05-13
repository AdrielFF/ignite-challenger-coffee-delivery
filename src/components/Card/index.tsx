import React from 'react'
import { CardContainer } from './styles'

interface CardProps {
  children: React.ReactNode
  size?: 'small' | 'auto'
  variant?: 'primary' | 'secondary'
}

export function Card({
  children,
  size = 'small',
  variant = 'primary',
}: CardProps) {
  return (
    <CardContainer size={size} variant={variant}>
      {children}
    </CardContainer>
  )
}
