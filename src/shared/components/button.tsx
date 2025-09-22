import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react';

const buttonVariants = cva(
  'body_01 justify-center items-center flex gap-[1rem] bg-white border-[1px] border-border text-black hover:bg-black hover:text-white',
  {
    variants: {
      size: {
        m: 'w-[15.8rem] h-[5rem]',
        l: 'w-[21rem] h-[6rem]',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  },
)

interface ButtonProps extends VariantProps<typeof buttonVariants>{
  text: string;
  icon?: ReactNode;
}

const Button = ({text, size, icon} : ButtonProps) => {
  return (
    <button type='button' className={buttonVariants({size})} aria-label={text}>
      {text}
      {icon}
    </button>
  )
}

export default Button
