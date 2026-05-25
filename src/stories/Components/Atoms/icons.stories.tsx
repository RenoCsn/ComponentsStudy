import type { Meta, StoryObj } from '@storybook/react-vite'
import * as Icons from '../../../Components/Icons'
import type { IconType } from '../../../utils/types/iconType'

export const AllIcons: React.FC<IconType> = ({
  color,
  size,
  isDisabled = false,
  isAnimated = false,
  animationStyle = 'spin',
  classNameCustom,
  svgProps,
}: IconType) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '10px',
    }}
  >
    {Object.entries(Icons).map(([name, Icon]) => (
      <div key={name} style={{ justifyItems: 'center' }}>
        <Icon
          color={color}
          size={size}
          isDisabled={isDisabled}
          isAnimated={isAnimated}
          animationStyle={animationStyle}
          classNameCustom={classNameCustom}
          svgProps={svgProps}
        />
        <p style={{ fontSize: '12px' }}>{name}</p>
      </div>
    ))}
  </div>
)

const meta = {
  title: 'Atoms/Icons',
  component: AllIcons,
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
            'small, medium, large or a numeric string for both values (width and height). It will convert from pixels to rem (×4).',
        },
      },
    },
    svgProps: {
      table: {
        type: {
          summary: 'Any svg props. Ex: "opacity: 0.7"',
        },
      },
    },
    animationStyle: {
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'spin, flipHorizontal, flipVertical, expand, decrease',
        },
      },
      options: ['spin', 'flipHorizontal', 'flipVertical', 'expand', 'decrease'],
    },
    classNameCustom: {
      table: {
        type: {
          summary:
            'Any tailwind css class. Ex: "rounded-sm border-4" Obs: Sometimes you may need to use !(important tailwind tag) after to overwrite some css.',
        },
      },
    },
  },
} satisfies Meta<typeof AllIcons>

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
          'Icons accepts primary, secondary, success, error, info, warning, and any hex string as preset colors.',
      },
    },
  },
  args: {
    children: 'Icons',
    color: 'secondary',
  },
}

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Icons can be used in different sizes as small, medium, large and a string using tailwind width and height properties',
      },
    },
  },
  args: {
    children: 'Sizes',
    size: 'large',
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Icons disabled styles.',
      },
    },
  },
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
}

export const Animated: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Icons could be animated or not.',
      },
    },
  },
  args: {
    children: 'Hover me!',
    isAnimated: true,
    animationStyle: 'decrease',
  },
}

export const Animations: Story = {
  parameters: {
    docs: {
      description: {
        storybook:
          'Icons have some different styles by default. You can use spin, flipHorizontal, flipVertical, expand, decrease.',
      },
    },
  },
  args: {
    children: 'Spin',
    isAnimated: true,
    animationStyle: 'spin',
  },
}

export const SvgProps: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Icons svg properties.',
      },
    },
  },
  args: {
    children: 'Custom',
    svgProps: { opacity: 0.7 },
  },
}

export const Custom: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Icons custom ccs.',
      },
    },
  },
  args: {
    children: 'Custom',
    classNameCustom: 'rounded-sm border-4',
  },
}
