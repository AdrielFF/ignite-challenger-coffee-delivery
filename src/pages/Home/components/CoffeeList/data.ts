import traditionalExpressImage from '../../../../assets/images/expresso-tradicional.svg'
import americanExpressImage from '../../../../assets/images/expresso-americano.svg'
import creamyExpressImage from '../../../../assets/images/expresso-cremoso.svg'
import iceCreamExpressImage from '../../../../assets/images/expresso-gelado.svg'
import coffeeAndMilkImage from '../../../../assets/images/cafe-com-leite.svg'
import latteImage from '../../../../assets/images/latte.svg'
import capuccinoImage from '../../../../assets/images/capuccino.svg'
import macchiatoImage from '../../../../assets/images/macchiato.svg'
import mocaccinoImage from '../../../../assets/images/mochaccino.svg'
import hotChocolateImage from '../../../../assets/images/chocolate-quente.svg'
import cubanImage from '../../../../assets/images/cubano.svg'
import HawaiianImage from '../../../../assets/images/havaiano.svg'
import arabicImage from '../../../../assets/images/arabe.svg'
import irishImage from '../../../../assets/images/irlandes.svg'

export interface CoffeeDataType {
  id: number
  imageUrl: string
  name: string
  description: string
  price: number
  categories: string[]
}

export const coffeeData = [
  {
    id: 1,
    imageUrl: traditionalExpressImage,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    categories: ['Tradicional'],
  },
  {
    id: 2,
    imageUrl: americanExpressImage,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    categories: ['Tradicional'],
  },
  {
    id: 3,
    imageUrl: creamyExpressImage,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    categories: ['Tradicional'],
  },
  {
    id: 4,
    imageUrl: iceCreamExpressImage,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    categories: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    imageUrl: coffeeAndMilkImage,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: 6,
    imageUrl: latteImage,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: 7,
    imageUrl: capuccinoImage,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: 8,
    imageUrl: macchiatoImage,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: 9,
    imageUrl: mocaccinoImage,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    categories: ['Tradicional', 'Com leite'],
  },
  {
    id: 10,
    imageUrl: hotChocolateImage,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    categories: ['Especial', 'Com leite'],
  },
  {
    id: 11,
    imageUrl: cubanImage,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    categories: ['Especial', 'Alcoólico', 'gelado'],
  },
  {
    id: 12,
    imageUrl: HawaiianImage,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    categories: ['Especial'],
  },
  {
    id: 13,
    imageUrl: arabicImage,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    categories: ['Especial'],
  },
  {
    id: 14,
    imageUrl: irishImage,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    categories: ['Especial', 'Alcoólico'],
  },
]
