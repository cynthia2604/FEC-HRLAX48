import React from "react";
import '@testing-library/jest-dom'
import RelatedList from "../RelatedList";
import { RelatedListEntry } from '../RelatedListEntry';
import {render, screen } from '@testing-library/react';

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
  const wrapper = render(<RelatedList related={ related }/>)
  expect(wrapper).toMatchSnapshot();
  wrapper.unmount();
  // const element = screen.getByTestId("related-items-carousel")
  // expect(element).toBeInTheDocument();
})