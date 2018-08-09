import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import People from './Charities'

describe('CharityList'), () => {
  if ('renders charity', () => {
    const wrapper = shallow(<charity.WrappedComponent charityId ={
      
    })
  })
}

// describe('People', () => {
//   it('renders people', () => {
//     const wrapper = shallow(<People.WrappedComponent personIds={ [1,823,54] } />)
//     expect(wrapper.find('withRouter(Connect(Person))')).toHaveLength(3)
//
//     // you can do things like this...
//     expect(wrapper.find('withRouter(Connect(Person))').first()).toHaveProp('personId', 1)
//
//     // or like this...
//     expect(wrapper.find('withRouter(Connect(Person))').get(1).props).toHaveProperty('personId', 823)
//   })
// })
