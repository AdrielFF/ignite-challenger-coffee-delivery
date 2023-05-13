import { Banner } from './components/Banner'
import { CoffeeList } from './components/CoffeeList'
import { CoffeeListContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeListContainer>
        <h2>Nossos café</h2>
        <CoffeeList />
      </CoffeeListContainer>
    </HomeContainer>
  )
}
