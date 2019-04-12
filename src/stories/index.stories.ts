import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Welcome, Button } from '@storybook/angular/demo';
import { CardComponent } from '../app/card/card-component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));


storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!'
    }
  }))
  .add('with title and subtitle', () => ({
    component: CardComponent,
    props: {
      title: 'Hello card!',
      subtitle: 'Well hello there'
    }
  }))
  .addDecorator(withNotes)
  .add(
    'with notes',
    () => ({
      component: CardComponent,
      props: {}
    }),
    { notes: 'Some Notes for the components can go here' }
  )
  .addDecorator(withKnobs)
  .add(
    'with knobs',
    () => ({
      component: CardComponent,
      props: {
        title: text("title", "Hello card!"),
        subtitle: text("subtitle", 'Well hello there')
      }
    }),
  )
  .add('with action', () => ({
    component: CardComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('Button was clicked')
    }
  }));


// let's nest a story into our main `Card` stories
storiesOf('Card/nested', module).add('special card', () => ({
  component: CardComponent,
  props: {
    content: "I'm a card in a nested story!"
  }
}));