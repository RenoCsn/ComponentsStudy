import type { Meta, StoryObj } from '@storybook/react-vite'

import { TypographyComponent } from '../../../Components/Typography/index'

const meta = {
  title: 'Atoms/Typography',
  component: TypographyComponent,
} satisfies Meta<typeof TypographyComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Color: Story = {
  args: {
    children: 'Typography with other color',
    color: 'success',
  },
}

export const Align: Story = {
  args: {
    children: 'Typography with align',
  },
}

//Terminar
export const Variant: Story = {
  args: {
    children: 'Typography with variants',
    variant: 'h1',
  },
}

export const Custom: Story = {
  args: {
    children: 'Typography with custom css',
    classNameCustom: {
      className: 'text-decoration: underline;',
    },
  },
}
