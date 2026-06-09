import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkComponent } from '../../../Components/Link/index'

const meta = {
  title: 'Atoms/Link',
  component: LinkComponent,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
      table: {
        type: {
          summary:
            'primary, secondary, success, error, info, warning, or hex code',
        },
      },
    },
    textDecoration: {
      table: {
        type: {
          summary: 'solid, dotted, double, dashed',
        },
      },
    },
    textDecorationColor: {
      control: {
        type: 'color',
      },
      table: {
        type: {
          summary:
            'primary, secondary, success, error, info, warning, or hex code',
        },
      },
    },
    textDecorationThickness: {
      table: {
        type: {
          summary:
            'small (1px), medium(2px), large(4px) or a numeric string. It will convert from pixels to rem (×4).',
        },
      },
    },
    animationStyle: {
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'underlineDown',
        },
      },
      options: ['underlineDown'],
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "rounded-b-4xl rounded-t-none" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
  },
} satisfies Meta<typeof LinkComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
  },
}

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Link accepts primary, secondary, success, error, info, warning, as preset colors.',
      },
    },
  },
  args: {
    children: 'Link component',
    color: 'info',
    href: 'https://www.google.com/',
    target: '_blank',
  },
}

export const CustomColor: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Link also can be used with a custom color passing the hex code.',
      },
    },
  },
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
    color: '#0502c6',
  },
}

export const TextDecorationColor: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Link text decoration accepts primary, secondary, success, error, info, warning, as preset colors.',
      },
    },
  },
  args: {
    children: 'Link component',
    textDecorationColor: 'warning',
    href: 'https://www.google.com/',
    target: '_blank',
  },
}

export const TextDecorationCustomColor: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Link text decoration also can be used with a custom color passing the hex code.',
      },
    },
  },
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
    textDecorationColor: '#c6ff00',
  },
}

export const TextDecorationThickness: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Link text decoration thickness can be defined using a numeric string value.',
      },
    },
  },
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
    textDecorationThickness: '3',
  },
}

export const Animated: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Link could be animated or not.',
      },
    },
  },
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
    isAnimated: false,
  },
}

export const Animations: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Link can be used with underlineDown animation.',
      },
    },
  },
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
    isAnimated: true,
    animationStyle: 'underlineDown',
  },
}

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Link custom ccs.',
      },
    },
  },
  args: {
    children: 'Link component',
    href: 'https://www.google.com/',
    target: '_blank',
    classNameCustom: 'tracking-widest',
  },
}
