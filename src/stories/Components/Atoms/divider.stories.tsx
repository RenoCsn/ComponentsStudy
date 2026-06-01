import type { Meta, StoryObj } from '@storybook/react-vite'

import { DividerComponent } from '../../../Components/Divider/index'

const meta = {
  title: 'Atoms/Divider',
  component: DividerComponent,
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
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
      table: {
        type: {
          summary: 'horizontal, vertical',
        },
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
      table: {
        type: {
          summary:
            'Line thickness in px presets small(1), medium (4) and large(8) or numeric string like "20px".',
        },
      },
    },
    borderStyle: {
      control: {
        type: 'select',
      },
      options: ['solid', 'dotted', 'double', 'dashed'],
      table: {
        type: {
          summary: 'solid, dotted, double, dashed',
        },
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['fullWidth', 'inset', 'middle'],
      table: {
        type: {
          summary: 'fullWidth, inset, middle',
        },
      },
    },
    childrenAlign: {
      control: {
        type: 'select',
      },
      options: ['center', 'left', 'right'],
      table: {
        type: {
          summary: 'center, left, right',
        },
      },
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "opacity-50!" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
  },
} satisfies Meta<typeof DividerComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Color: Story = {
  args: {
    color: 'success',
  },
}

export const CustomColor: Story = {
  args: {
    color: '#1976d2',
  },
}

export const Orientation: Story = {
  render: (args) => (
    <div className='flex h-40 items-stretch gap-4 px-4'>
      <span className='text-sm text-custom-gray-600'>Left</span>
      <DividerComponent {...args} />
      <span className='text-sm text-custom-gray-600'>Right</span>
    </div>
  ),
  args: {
    orientation: 'vertical',
    size: 'medium',
    color: 'primary',
  },
}

export const BorderStyle: Story = {
  args: {
    borderStyle: 'dashed',
    color: 'primary',
  },
}

export const Size: Story = {
  args: {
    size: 'large',
    color: 'primary',
  },
}

export const CustomSize: Story = {
  args: {
    size: '6',
    color: 'primary',
  },
}

export const Variant: Story = {
  args: {
    variant: 'inset',
    color: 'primary',
  },
}

export const WithChildren: Story = {
  args: {
    hasChildren: true,
    children: 'OR',
    childrenAlign: 'center',
    color: 'primary',
  },
}

export const HasBlurry: Story = {
  args: {
    hasBlurry: true,
    size: 'medium',
    color: 'primary',
  },
}

export const IsFlexItem: Story = {
  render: (args) => (
    <div className='flex items-stretch gap-4 rounded border border-custom-gray-200 px-4 py-4'>
      <span className='text-sm text-custom-gray-600'>Section A</span>
      <DividerComponent {...args} />
      <span className='text-sm text-custom-gray-600'>Section B</span>
    </div>
  ),
  args: {
    orientation: 'vertical',
    isFlexItem: true,
    size: 'medium',
    color: 'primary',
  },
}

export const Custom: Story = {
  args: {
    classNameCustom: 'opacity-50',
    color: 'error',
  },
}
