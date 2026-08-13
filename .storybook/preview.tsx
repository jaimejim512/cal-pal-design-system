import type { Preview } from '@storybook/react-vite'
import '../src/tokens.css'
import './preview.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'app',
      options: {
        app: { name: 'App background', value: '#000000' },
        surface: { name: 'Surface', value: '#1C1C1C' },
      },
    },

    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;