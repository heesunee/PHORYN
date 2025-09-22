import { cva, type VariantProps } from 'class-variance-authority'

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
}

const Button = ({text, size} : ButtonProps) => {
  return (
    <button type='button' className={buttonVariants({size})}>
      {text}
    </button>
  )
}

export default Button
