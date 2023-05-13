import styled from 'styled-components'

export const BannerWrapper = styled.div`
  position: relative;

  overflow: hidden;

  & > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    z-index: -1;
  }
`

export const BannerContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 3.5rem;

  & > div {
    max-width: 36.75rem;
  }

  padding: 5.75rem 0;

  & h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  & p {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0 4.125rem;
    font-size: 1.25rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.3;
  }

  @media (max-width: 1150px) {
    padding: 5.75rem 2rem;
  }
`

export const BannerImage = styled.img`
  @media (max-width: 1140px) {
    position: absolute;
    right: 0;
    transform: translateX(50%);
    z-index: -1;

    opacity: 0.4;
  }
`

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  font-size: 1rem;
  line-height: 1.3;

  @media (max-width: 554px) {
    grid-template-columns: 1fr;
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

interface IconContentType {
  background: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const IconContainer = styled.span<IconContentType>`
  background: ${(props) => props.theme[props.background]};
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  & svg {
    color: ${(props) => props.theme.background};
  }
`
