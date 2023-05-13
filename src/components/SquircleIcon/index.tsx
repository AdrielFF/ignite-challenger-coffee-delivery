import { SquircleIconContainer, SquircleIconContainerType } from './styles'
import React from 'react'

interface SquircleIconType extends SquircleIconContainerType {
  children: React.ReactNode
}

export function SquircleIcon(props: SquircleIconType) {
  return (
    <SquircleIconContainer color={props.color} background={props.background}>
      {props.children}
    </SquircleIconContainer>
  )
}
