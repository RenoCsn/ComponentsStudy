import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonComponent } from '../../../Components/Button'
import { fn } from 'storybook/test'

const meta = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'primary, secondary, success, error, info, warning, inherit',
        },
      },
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
        'inherit',
      ],
    },
    align: {
      table: {
        type: {
          summary: 'center, start, justify, end, inherit',
        },
      },
    },
    variant: {
      table: {
        type: {
          summary: 'contained, outlined, text',
        },
      },
    },
    animationStyle: {
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'simple, changeColor, expand, decrease, bounce',
        },
      },
      options: ['simple', 'changeColor', 'expand', 'decrease', 'bounce'],
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
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Button accepts primary, secondary, success, error, info, warning, and inherit as preset colors.',
      },
    },
  },
  args: {
    children: 'Button',
    color: 'secondary',
  },
}

export const Variant: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Button can be used in other variants as contained, outlined and text.',
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'outlined',
  },
}

export const Align: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button content controlling its align style.',
      },
    },
  },
  args: {
    children: 'Button',
    align: 'end',
    classNameCustom: 'w-32',
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button disabled styles.',
      },
    },
  },
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
}

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button full width.',
      },
    },
  },
  args: {
    children: 'Full',
    isFullWidth: true,
  },
}

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button have small, medium and large sizes.',
      },
    },
  },
  args: {
    children: 'Sizes',
    size: 'large',
  },
}

export const Animated: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button could be animated or not.',
      },
    },
  },
  args: {
    children: 'Click me!',
    isAnimated: true,
  },
}

export const Animations: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Button have some different styles by default. You can use simple, backgroundLighter, expand, decrease and bounce.',
      },
    },
  },
  args: {
    children: 'Bounce',
    isAnimated: true,
    animationStyle: 'bounce',
  },
}

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button custom ccs.',
      },
    },
  },
  args: {
    children: 'Custom',
    classNameCustom: 'rounded-b-4xl rounded-t-none',
  },
}

export const OnClick: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button click function.',
      },
    },
  },
  args: {
    children: 'Click me!',
    onClick: fn(),
  },
}
