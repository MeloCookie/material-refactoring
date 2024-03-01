import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  Key,
  ReactNode,
  SetStateAction,

} from "react";
import React from "react";
import {StaticImageData, StaticImport} from "next/dist/shared/lib/get-img-props";
/*------------**------------*/

export interface ReactDivProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement> {
  key?: Key | null | undefined
  className?: string
}
export interface ToggleProps {
  isToggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
}

export type GenericIconProps = string | ReactNode

export type PropsImage = string | StaticImport | StaticImageData

export type SetStateType<T> =  React.Dispatch<React.SetStateAction<T>>
