import React from "react";
import '@testing-library/jest-dom'
import RelatedList from "../RelatedList";
import  RelatedListEntry from '../RelatedListEntry';
const { render, screen }  = require('@testing-library/react');

const related = [
  {
    id: '42366',
    name:'Camo Onesie',
    category: 'Jackets',
    default_price: '120.00'
  },
  {
    id: '42367',
    name: 'Bright Future Sunglasses',
    category: 'Sunglasses',
    default_price: '69'
  }
]

const currentItem = {
    id: '42372',
    name:'Blues Suede Shoes',
    category: 'Dress Shoes',
    default_price: '120.00'
}

jest.mock('../RelatedListEntry', () => {
  return {
    esModule: true,
    default: () => {
      return <div/>
    },
    RelatedListEntry: () => {
      return <div/>
    }
  }
})

test('should generate a list of related items', () => {
  render(<RelatedList related={ related } selected={currentItem}/>)

  const element = screen.getByTestId("related-items-carousel")
  expect(element).toBeInTheDocument();
})