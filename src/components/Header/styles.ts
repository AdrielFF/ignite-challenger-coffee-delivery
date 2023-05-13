import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  padding: 2rem 0;

  @media (max-width: 1150px) {
    padding: 2rem;
  }
`

export const HeaderSideInfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  align-items: center;
`

export const CartItemsQuantityContainer = styled.span`
  width: 1.25rem;
  height: 1.25rem;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  border-radius: 50%;

  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  font-weight: 700;
`
