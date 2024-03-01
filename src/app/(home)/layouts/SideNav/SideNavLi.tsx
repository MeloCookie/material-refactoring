import Link from 'next/link'
/*------------*React*------------*/
import {GenericIconProps, ReactDivProps} from "@type";
import {Attributes, useEffect} from "react";
import {useLayoutConfigContext} from "@utils/Contexts/LayoutConfigContext";
/*------------*Types*------------*/

export interface LiWithIconProps extends ReactDivProps, Attributes {

  name?: string //key

  item?: any

  icon?: GenericIconProps

  printName?: boolean

}

export interface LinkedLiProps extends LiWithIconProps {

  href: string

  additionalHref?: string

  target?: string

  currentPath?: string

}

export interface SideNavLiProps extends Pick<
  LinkedLiProps, 'currentPath' | 'className'>
{

  list: LinkedLiProps[]

  header?: string

  ulClass?: string

  liClass?: string
}

const SideNavLi = ({
  list, ulClass, liClass, header, currentPath
}:SideNavLiProps,
) => {

  const {sideNavColor, sideNavType } =
    useLayoutConfigContext()

  useEffect(() => {
    sideNavColor.setColor(sideNavColor.color)
  }, [sideNavColor,]);

  const Head = () => {
    return (
      <h1 className={`flex font-semibold text-sm mx-3 mt-4 mb-2
      ${sideNavType.type === 'bg-[#2f2f2f]' ? "text-[#cdcdcd]" : "text-[#5C656A]"}`}>
        {header}
      </h1>
    )
  }

  const Content = ({item}: LinkedLiProps) => {

    const addHref = item.additionalHref;

    if (addHref) {
      item.href = [item.href, addHref].join('')
    }

    let className = liClass;

    let color: string;

    sideNavColor.color === 'bg-neutral-100'
      ? color = 'text-black bg-white '
      : color = `text-white `

    if (item.href === currentPath) {
      className = [className, sideNavColor.color, color].join(' ')
    }
    const IconAndName = () => {
      return (
        item.icon
          ? (
              item.printName
                ? <>{item.icon}{item.name}</>
                : <></>
            )
          : item.name
      )
    }

    return (
      <li key={item.name}>
        <Link href={item.href} target={item.target} className={`${className}`}>
          <IconAndName />
          <p>{item.item}</p>
        </Link>
      </li>
    )
  }

  return (
    <ul className={ulClass}>
      {header ? <Head /> : <></>}
      {
        list.map((item) => {
          return <Content key={item.name} item={item}  href={item.href}/>
        })
      }
    </ul>
  )
}
export default SideNavLi
