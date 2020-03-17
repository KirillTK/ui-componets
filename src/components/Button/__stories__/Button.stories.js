import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Button } from '../Button';

storiesOf('Button', module).add('Button', () => {
  return (
    <Button
      title={text('Title', 'Button')}
      disabled={boolean('Disabled', false)}
      centered={boolean('Centered', false)}
    />
  );
});
