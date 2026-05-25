import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleLoadingComponent } from '../../../../Components/Loadings/Circle'

const meta = {
  title: 'Atoms/Loadings/Circle',
  component: CircleLoadingComponent,
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
            'small, medium, large or a numeric string. It will convert from pixels to rem (×4).',
        },
      },
    },
    speed: {
      control: { type: 'number', min: 0.25, max: 5, step: 0.25 },
      table: {
        type: {
          summary: 'Spin animation duration in seconds.',
        },
      },
    },
    thickness: {
      control: { type: 'number', min: 2, max: 12, step: 1 },
      table: {
        type: {
          summary: 'Ring stroke width in pixels.',
        },
      },
    },
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      table: {
        type: {
          summary:
            'Progress value from 0 to 100. Updates the ring and label in finite mode.',
        },
      },
    },
    label: {
      table: {
        type: {
          summary: 'Basic string for optional text a side the value.',
        },
      },
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['inside', 'left', 'right', 'top', 'bottom'],
      table: {
        type: {
          summary: 'Position of label and value, relative to the ring.',
        },
      },
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "opacity-50" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof CircleLoadingComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotLoading: Story = {
  args: {
    isLoading: false,
  },
}

export const Finite: Story = {
  args: {
    hasValue: true,
    value: 65,
  },
}

export const FiniteWithLabelInside: Story = {
  args: {
    hasValue: true,
    value: 65,
    hasLabel: true,
    labelPosition: 'inside',
  },
}

export const FiniteWithLabelTop: Story = {
  args: {
    hasValue: true,
    value: 65,
    hasLabel: true,
    labelPosition: 'top',
  },
}

export const FiniteWithLabelRight: Story = {
  args: {
    hasValue: true,
    value: 65,
    hasLabel: true,
    labelPosition: 'right',
  },
}

export const FiniteWithLabelBottom: Story = {
  args: {
    hasValue: true,
    value: 65,
    hasLabel: true,
    labelPosition: 'bottom',
  },
}

export const FiniteWithLabelLeft: Story = {
  args: {
    hasValue: true,
    value: 65,
    hasLabel: true,
    labelPosition: 'left',
  },
}

export const WithBackground: Story = {
  args: {
    hasLabel: true,
  },
}

export const Color: Story = {
  args: {
    color: 'warning',
  },
}

export const CustomColor: Story = {
  args: {
    color: '#dbd41d',
  },
}

export const CustomSpeed: Story = {
  args: {
    speed: 0.5,
  },
}

export const CustomThickness: Story = {
  args: {
    thickness: 8,
  },
}

export const Custom: Story = {
  args: {
    classNameCustom: 'opacity-50',
  },
}
