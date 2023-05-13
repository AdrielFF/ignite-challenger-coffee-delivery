import styled from 'styled-components'

export const ConfirmedOrderWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 5rem 0;

  & h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }

  & p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 0.25rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem;

    & h1,
    p {
      text-align: center;
    }
  }
`

export const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  & img {
    width: 100%;
    max-width: 30.75rem;

    @media (max-width: 1024px) {
      margin-top: 1rem;
    }
  }
`
export const CardWrapper = styled.div`
  max-width: 32.875rem;
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.background};

  border-radius: 6px 36px;
  border: 1px solid black;

  position: relative;
  background-clip: padding-box;
  border: solid 1px transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    z-index: -1;
  }
`

interface CardContentProsp {
  iconColor: 'purple' | 'yellow' | 'yellow-dark'
}

export const CardContent = styled.span<CardContentProsp>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & div {
    line-height: 1.3;
  }

  & span {
    background: ${(props) => props.theme[props.iconColor]};
    color: ${(props) => props.theme.background};
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
  }
`
