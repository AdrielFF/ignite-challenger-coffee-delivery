import {
  CategoriesContainer,
  CofeeCategorieContainer,
  CoffeeCardFooter,
  CoffeeContentContainer,
  CoffeeListContainer,
} from './styles'
import { Card } from '../../../../components/Card'
import { coffeeData } from './data'
import { AddToCartForm } from '../AddToCartForm/index'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      {coffeeData.map((coffee) => {
        return (
          <Card key={coffee.id} size="small" variant="secondary">
            <CoffeeContentContainer>
              <img src={coffee.imageUrl} alt="" />
              <CategoriesContainer>
                {coffee.categories.map((category, index) => (
                  <CofeeCategorieContainer key={index}>
                    {category}
                  </CofeeCategorieContainer>
                ))}
              </CategoriesContainer>
              <div>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
                <CoffeeCardFooter>
                  <span>
                    {coffee.price.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <AddToCartForm product={coffee} />
                </CoffeeCardFooter>
              </div>
            </CoffeeContentContainer>
          </Card>
        )
      })}
    </CoffeeListContainer>
  )
}
