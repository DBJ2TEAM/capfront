//함수형 컴포넌트를 사용하기 위해서
import type {FC} from 'react'
import type {ButtonProps} from '../atoms/Button'
//Icon 컴포넌트와 헷갈리지 않도록 이름 변경
import type {IconProps as CIconProps} from '../atoms/Icon'
import {Button} from '../atoms/Button'
import {Icon as CIcon} from '../atoms/Icon'

//button,Icon,iconClassName까지 타입으로 지정하는 객체 생성
export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string
  }


export const BIcon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) => {
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  )
}