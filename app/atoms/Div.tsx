import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'


export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps & { }

export const Div: FC<DivProps> = ({
  className: _className,
  ...props
}) => {
  const className = [_className].join(' ')
  return <div {...props} className={className}/>
}