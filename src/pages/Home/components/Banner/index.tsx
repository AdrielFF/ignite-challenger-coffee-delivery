import {
  BannerContainer,
  IconsWrapper,
  BannerWrapper,
  IconContainer,
  BannerImage,
} from './styles'

import bannerImage from '../../../../assets/images/banner-image.svg'
import bannerBackground from '../../../../assets/images/banner-background.svg'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <BannerWrapper>
      <img src={bannerBackground} alt="" />
      <BannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe o café onde estiver, a qualquer
            hora
          </p>
          <IconsWrapper>
            <span>
              <IconContainer background="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              Compra simples e segura
            </span>
            <span>
              <IconContainer background="base-text">
                <Package size={16} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </span>
            <span>
              <IconContainer background="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </span>
            <span>
              <IconContainer background="purple">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </span>
          </IconsWrapper>
        </div>
        <BannerImage
          src={bannerImage}
          alt="Um copo de café com grãos de café em volta"
        />
      </BannerContainer>
    </BannerWrapper>
  )
}
