import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

const buttonVariants = cva(
  'body_01 flex items-center justify-center gap-[1rem] transition-colors duration-200 ease-in disabled:cursor-not-allowed disabled:bg-gray disabled:text-border disabled:hover:bg-gray disabled:hover:text-border',
  {
    variants: {
      variant: {
        white: 'border-[1px] border-border bg-white text-black hover:bg-black hover:text-white',
        gray: 'bg-gray text-brown hover:bg-beige',
      },
      size: {
        m: 'h-[5rem] w-[15.8rem]',
        l: 'h-[6rem] w-[21rem]',
        xl: 'h-[8rem] w-[42.8rem]',
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'm',
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, variant, size, icon, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size })}
      aria-label={text}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
