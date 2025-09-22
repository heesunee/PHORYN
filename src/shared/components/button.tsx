import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react';

const buttonVariants = cva(
  'body_01 justify-center items-center flex gap-[1rem] transition-colors duration-200 ease-in',
  {
    variants: {
      variant: {
        white:'bg-white border-[1px] border-border text-black hover:bg-black hover:text-white',
        gray: 'bg-gray text-brown hover:bg-beige',
      },
      size: {
        m: 'w-[15.8rem] h-[5rem]',
        l: 'w-[21rem] h-[6rem]',
        xl: 'w-[24.8rem] h-[8rem]'
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'm',
    },
  },
)

interface ButtonProps extends VariantProps<typeof buttonVariants>{
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button = ({text, variant, size, icon, onClick} : ButtonProps) => {
  return (
    <button type='button' className={buttonVariants({variant, size})} aria-label={text} onClick={onClick}>
      {text}
      {icon}
    </button>
  )
}

export default Button
