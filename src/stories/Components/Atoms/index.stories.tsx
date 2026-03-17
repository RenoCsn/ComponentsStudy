import type { Meta, StoryObj } from '@storybook/react-vite'

import { TypographyComponent } from '../../../Components/Typography/index'

const meta = {
  title: 'Atoms/Typography',
  component: TypographyComponent,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
      table: {
        type: {
          summary:
            'primary, secondary, success, error, info, warning, textPrimary, textSecondary,textDisabled ou código hex',
        },
      },
    },
    align: {
      table: {
        type: {
          summary: 'center, start, justify, left, right, end',
        },
      },
    },
    variant: {
      table: {
        type: {
          summary: 'h1, h2, h3, h4, h5, p, span, b',
        },
      },
    },
  },
} satisfies Meta<typeof TypographyComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default.',
  },
}

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Typography accepts primary, secondary, success, error, info, warning, textPrimary, textSecondary, textDisabled as preset colors.',
      },
    },
  },
  args: {
    children: 'Typography with preset color',
    color: 'success',
  },
}

export const CustomColor: Story = {
  args: {
    children:
      'Typography also can be used with a custom color passing the hex code.',
    color: '#0502c6',
  },
}

export const Align: Story = {
  args: {
    children: 'Typography with align style.',
    align: 'center',
  },
}

//Terminar
export const Variant: Story = {
  args: {
    children: 'Typography as H1 style.',
    variant: 'h1',
  },
}

export const Custom: Story = {
  args: {
    children: 'Typography with custom css.',
    classNameCustom: 'underline font-black!',
  },
}
