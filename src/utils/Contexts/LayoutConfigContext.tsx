import {SetStateType} from "@/type";
import {
  Context, createContext,
  ReactNode, useContext,
  useState
} from "react";
import {lgOrMd} from "@utils/screenSize";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;

interface SelectSideNavColor {

  color: string

  setColor: SetStateType<string>

}
interface  SelectSideNavType {

  type: string

  setType: SetStateType<string>

}
interface ToggleSideNavBar {

  toggle: boolean

  setToggle: SetStateType<boolean>

}
interface ToggleSettingBar {

  toggle: boolean

  setToggle: SetStateType<boolean>

}
interface FixedTopBar {

  isFix: boolean

  setFix: SetStateType<boolean>

}
interface LayoutConfigContextProps {

  sideNavColor: SelectSideNavColor

  sideNavType: SelectSideNavType

  fixedTopBar: FixedTopBar

  toggleSideNavBar: ToggleSideNavBar

  toggleSettingBar: ToggleSettingBar

}

const LayoutConfigContext: Context<LayoutConfigContextProps> =
  createContext<LayoutConfigContextProps>(
  {} as LayoutConfigContextProps
)

export const initialLayoutConfig: LayoutConfigContextProps = {

  sideNavColor: {color: 'bg-black', setColor: (color) => {}},

  sideNavType: {type: 'bg-white', setType: (type) => {}},

  fixedTopBar: {isFix: false, setFix: (fix) => {}},

  toggleSideNavBar: {toggle: !lgOrMd(), setToggle: (toggle) => {}},

  toggleSettingBar: {toggle: false, setToggle: (toggle) => {}}

}

export const LayoutConfigProvider = ({
  children
}: {
  children: ReactNode
}):ReactNode => {

  const [sideNavColor, setSideNavColor] =
    useState(initialLayoutConfig.sideNavColor.color)

  const [sideNavType, setSideNavType] =
    useState(initialLayoutConfig.sideNavType.type)

  const [isFixed, setFixed] =
    useState(initialLayoutConfig.fixedTopBar.isFix)

  const [toggleSideNav, setToggleSideNav] =
    useState(initialLayoutConfig.toggleSideNavBar.toggle)

  const [toggleSetting, setToggleSetting] =
    useState(initialLayoutConfig.toggleSettingBar.toggle)


  const contextValue: LayoutConfigContextProps = {

    sideNavColor: {color: sideNavColor, setColor: setSideNavColor},

    sideNavType: {type: sideNavType, setType: setSideNavType},

    fixedTopBar: {isFix: isFixed , setFix: setFixed },

    toggleSideNavBar: {toggle: toggleSideNav, setToggle: setToggleSideNav},

    toggleSettingBar: {toggle: toggleSetting, setToggle: setToggleSetting}

  }

  return (
    <LayoutConfigContext.Provider value={contextValue} >
      {children}
    </LayoutConfigContext.Provider>
  )
}

export const useLayoutConfigContext = ():LayoutConfigContextProps => {

  const context = useContext(LayoutConfigContext)

  if (typeof context === "undefined") {
    throw new Error(
      "useLayoutConfigContext should be used within the LayoutConfigContext provider!",
    );
  }

  return context
}
