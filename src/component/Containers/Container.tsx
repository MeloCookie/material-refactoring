import {
  DetailedHTMLProps, ElementType,
  HTMLAttributes, Key, ReactNode
} from "react";

interface ContainerProps extends
  DetailedHTMLProps<HTMLAttributes<
    HTMLElement>,HTMLElement>
{
  children?: ReactNode

  className?: string

  tag?: ElementType

  id?: string

  key?: Key
}
const Container = ({
  children, className, tag: Tag = 'div', id
}: ContainerProps
) => {
  const _className = [className, ' p-4 '].join(' ')
  return (
    <Tag id={id} className={`${_className}`}>
      {children}
    </Tag>
  )
}
export default Container
