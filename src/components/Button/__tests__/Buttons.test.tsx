import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../Button';

describe('Component [Button]', () => {

  it('should render', () => {
    const component = shallow(<Button/>);

    expect(component).toHaveLength(1);
  });
});