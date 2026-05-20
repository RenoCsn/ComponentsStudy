import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkeletonComponent } from '../../../Components/Skeleton/index'
import { ButtonComponent } from '../../../Components/Button'

const meta = {
  title: 'Atoms/Skeleton',
  component: SkeletonComponent,
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
    variant: {
      table: {
        type: {
          summary: 'circular, rectangular, rounded, text',
        },
      },
    },
    animationStyle: {
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'pulse, wave',
        },
      },
      options: ['pulse,'],
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
} satisfies Meta<typeof SkeletonComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithButton: Story = {
  args: { children: <ButtonComponent>Hello world</ButtonComponent> },
}

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Skeleton accepts primary, secondary, success, error, info, warning, as preset colors.',
      },
    },
  },
  args: {
    color: 'secondary',
  },
}

export const CustomColor: Story = {
  args: {
    children:
      'Skeleton also can be used with a custom color passing the hex code.',
    color: '#0502c6',
  },
}

export const Variant: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Skeleton can be used in other variants as circular, rectangular, rounded and text.',
      },
    },
  },
  args: {
    variant: 'circular',
  },
}

export const SetSize: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Skeleton size can be defined using width and height variables. Obs: Use only numbers and remember it will use values in rem.',
      },
    },
  },
  args: {
    width: 10,
    height: 10,
  },
}

export const Animated: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Skeleton could be animated or not.',
      },
    },
  },
  args: {
    isAnimated: false,
  },
}

export const Animations: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Skeleton can be used with wave or pulse animations.',
      },
    },
  },
  args: {
    isAnimated: true,
    animationStyle: 'wave',
  },
}

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Skeleton custom ccs.',
      },
    },
  },
  args: {
    classNameCustom: 'rounded-2xl',
  },
}
