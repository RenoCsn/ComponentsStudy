import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBarLoadingComponent } from '../../../../Components/Loadings/ProgressBar'
import { ArrowCircleRightIcon } from '../../../../Components/Icons'

const meta = {
  title: 'Atoms/Loadings/ProgressBar',
  component: ProgressBarLoadingComponent,
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
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
    backgroundColor: {
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
          summary: 'Speed of the animation in seconds.',
        },
      },
    },
    progressValue: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      table: {
        type: {
          summary:
            'Progress value from 0 to 100. Updates the fill and label in finite mode.',
        },
      },
    },
    label: {
      table: {
        type: {
          summary: 'Basic string for optional text beside the value.',
        },
      },
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      table: {
        type: {
          summary: 'Position of label and value, relative to the progressBar.',
        },
      },
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "border-3 border-red-500 border-dotted" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
  },
} satisfies Meta<typeof ProgressBarLoadingComponent>

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
    hasProgressValue: true,
    progressValue: 30,
  },
}

export const FiniteNotLoading: Story = {
  args: {
    hasProgressValue: true,
    progressValue: 30,
    isLoading: false,
  },
}

export const FiniteWithLabelTop: Story = {
  args: {
    hasProgressValue: true,
    progressValue: 50,
    hasLabel: true,
    labelPosition: 'top',
  },
}

export const FiniteWithLabelRight: Story = {
  args: {
    hasProgressValue: true,
    progressValue: 75,
    hasLabel: true,
    labelPosition: 'right',
  },
}

export const FiniteWithLabelBottom: Story = {
  args: {
    hasProgressValue: true,
    progressValue: 65,
    hasLabel: true,
    labelPosition: 'bottom',
  },
}

export const FiniteWithLabelLeft: Story = {
  args: {
    hasProgressValue: true,
    progressValue: 65,
    hasLabel: true,
    labelPosition: 'left',
  },
}

export const WithoutBackground: Story = {
  args: {
    hasBackground: false,
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

export const CustomBackgroundColor: Story = {
  args: {
    backgroundColor: 'secondary',
  },
}

export const CustomSpeed: Story = {
  args: {
    speed: 0.5,
  },
}

export const Reverse: Story = {
  args: {
    isReverse: true,
  },
}

export const WithChildren: Story = {
  args: {
    children: <ArrowCircleRightIcon />,
  },
}

export const Custom: Story = {
  args: {
    classNameCustom: 'border-3 border-red-500 border-dotted',
  },
}
