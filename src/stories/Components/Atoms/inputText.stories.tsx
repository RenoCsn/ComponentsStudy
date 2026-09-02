import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputComponent } from '../../../Components/Inputs/InputText'
import { expect, fn } from 'storybook/test'
import * as Icons from '../../../Components/Icons'

const meta = {
  title: 'Atoms/InputText',
  component: InputComponent,
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
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'outlined, filled, standard',
        },
      },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'small, medium, large',
        },
      },
      options: ['small', 'medium', 'large'],
    },
    iconName: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "rounded-br-4xl rounded-t-none" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Type here',
    onChange: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof InputComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default',
    helperText: 'Helper text goes here',
  },
}

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Input accepts primary, secondary, success, error, info, warning, and custom colors.',
      },
    },
  },
  args: {
    label: 'Color',
    color: 'secondary',
  },
}

export const Variant: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input variants: outlined, filled, and standard.',
      },
    },
  },
  args: {
    label: 'Variant',
    variant: 'filled',
  },
}

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input sizes: small, medium, and large.',
      },
    },
  },
  args: {
    label: 'Size',
    size: 'large',
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input disabled styles.',
      },
    },
  },
  args: {
    label: 'Disabled',
    isDisabled: true,
    defaultValue: 'Cannot edit',
  },
}

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input full width.',
      },
    },
  },
  args: {
    label: 'Full width',
    isFullWidth: true,
  },
}

export const HelperText: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Helper text under the field.',
      },
    },
  },
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
    type: 'email',
  },
}

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Error state with errorText.',
      },
    },
  },
  args: {
    label: 'Email',
    isError: true,
    errorText: 'Enter a valid email address.',
    defaultValue: 'not-an-email',
  },
}

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input with icon at the start or in the end.',
      },
    },
  },
  args: {
    label: 'With Icon',
    iconName: 'DeleteIcon',
  },
}

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input custom css.',
      },
    },
  },
  args: {
    label: 'Custom',
    classNameCustom: 'rounded-br-4xl rounded-t-none',
  },
}

export const OnChange: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Input on change test.',
      },
    },
  },
  args: {
    label: 'Type something',
    id: 'input_test',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const input = await canvas.findByLabelText('Type something')

    await userEvent.type(input, 'hello')

    await expect(args.onChange).toHaveBeenCalled()
  },
}
