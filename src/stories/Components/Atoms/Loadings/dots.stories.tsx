import type { Meta, StoryObj } from '@storybook/react-vite'
import { DotsLoadingComponent } from '../../../../Components/Loadings/Dots'

const meta = {
  title: 'Atoms/Loadings/Dots',
  component: DotsLoadingComponent,
  args: {
    children: 'Loading',
    isLoading: true,
    maxDots: 3,
    intervalMs: 400,
  },
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
    size: {
      table: {
        type: {
          summary:
            'small, medium, large or a string with width and height values. It will convert from pixels to rem.',
        },
      },
    },
    maxDots: {
      control: { type: 'number', min: 1, max: 8, step: 1 },
      table: {
        type: {
          summary: 'Max number of dots to show.',
        },
      },
    },
    intervalMs: {
      control: { type: 'number', min: 100, max: 2000, step: 50 },
      table: {
        type: {
          summary: 'Animation speed in millisecond.',
        },
      },
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "font-black" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
  },
} satisfies Meta<typeof DotsLoadingComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotLoading: Story = {
  args: {
    isLoading: false,
  },
}

export const CustomInterval: Story = {
  args: {
    intervalMs: 100,
  },
}

export const MaxDots: Story = {
  args: {
    maxDots: 5,
    children: 'Continue',
  },
}

export const Color: Story = {
  args: {
    color: 'warning',
    children: 'Saving',
  },
}

export const CustomColor: Story = {
  args: {
    color: '#dbd41d',
    children: 'Downloading',
  },
}

export const Custom: Story = {
  args: {
    classNameCustom: 'font-black',
    children: 'Fetching data',
  },
}
