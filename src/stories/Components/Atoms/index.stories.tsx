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

export const CustomColor: Story = {
  args: {
    children: 'Typography with a custom color',
    color: 'ff00c6',
  },
}

export const Align: Story = {
  args: {
    children: 'Typography with align',
    align: 'center',
  },
}

//Terminar
export const Variant: Story = {
  args: {
    children: 'H1 typography',
    variant: 'h1',
  },
}

export const Custom: Story = {
  args: {
    children: 'Typography with custom css',
    classNameCustom: 'underline font-black!',
  },
}
