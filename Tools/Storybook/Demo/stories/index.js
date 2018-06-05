import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Hello from './Hello';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked1')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked1')}>😀 😎 👍 💯</Button>);


const words = "storybook";
storiesOf('Hello', module)
    .add('show Hello', () =>(
        <Hello words={words}/>
    ));