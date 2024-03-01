'use client'
import React from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useLayoutConfigContext} from "@utils/Contexts/LayoutConfigContext";
import {
  UserCircleIcon,
  BellIcon,
  Bars3Icon,
  Cog6ToothIcon
} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react"
import {usePathname, useRouter} from "next/navigation";
import {lgOrMd} from "@utils/screenSize";


const Header = () => {
  //검색 창 위치 조절
  const [searchPosition, setSearchPosition] =
    useState(window.innerWidth >= 832)

  const {
    toggleSideNavBar,
    fixedTopBar,
    toggleSettingBar
  } = useLayoutConfigContext()

  const path = usePathname()

  const handleSideNavBar = () => {
    toggleSideNavBar.setToggle(val => !val)
  }

  const handleSettingBar = () => {
    toggleSettingBar.setToggle(val => !val)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchPosition = () => {
    setSearchPosition(window.innerWidth >= 832);
  }
  useEffect(() => {
    if(lgOrMd() && toggleSideNavBar.toggle){
      toggleSideNavBar.setToggle(false)
    }
    handleSearchPosition()
    window.addEventListener('resize', handleSearchPosition)
    return () => {
      window.removeEventListener('resize',handleSearchPosition)
    }
  }, [handleSearchPosition]);

  const [url, setUrl] = useState('')
  const router = useRouter()
  const handleEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      EnterRouting(router, url)
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUrl(value)
  }
  const EnterRouting = (
    router: AppRouterInstance,
    url: string,
  ) => {
    let resolvedUrl = url.toLowerCase();
    switch(resolvedUrl) {
      case 'dashboard' :
      case 'home':
      case '':
      case ' ':
        router.push('/');
        break;
      case 'profile':
        router.push('/profile');
        break;
      case 'tables':
        router.push('/tables');
        break;
      case 'notifications':
        router.push('/notifications');
        break;
      case 'test':
        router.push('/test');
        break;
      default:
        `/${resolvedUrl}`
        break;
    }
    setUrl('')
  }

  const ButtonOrSign = () => {
    return (
      <>
      {!lgOrMd()
        ?
        <>
          <li>
            <button
              className="flex items-center"
              onClick={handleSideNavBar}
            >
              <Bars3Icon className="w-5"/>
            </button>
          </li>
          <li className="flex items-center gap-1">
            <button className="flex items-center">
              <UserCircleIcon className="w-5"/>
            </button>
          </li>
        </>
        :
        <li className="flex items-center gap-1">
          <button className="flex items-center">
            <UserCircleIcon className="w-5"/>
            <p className={`font-semibold text-xs`}>Sign In</p>
          </button>
        </li>
    }
    </>
  )
  }

  return (
    <div
      className={`flex justify-between my-1 w-full px-1
      ${fixedTopBar?.isFix ? "sticky top-0 z-20 " : ""}
    `}>
      <div
        className={`flex w-full items-center transition-all
        ${fixedTopBar?.isFix
          ? "bg-white p-4 rounded-xl shadow-md "
          : ""
        }
      `}>
        <div
          className={`flex w-full justify-between  md:mr-8
          ${searchPosition ? "" : "flex-wrap-reverse gap-6" }
        `}>
          <div
            className={`w-full 
            `}
          >
            <h1 className="flex max-w items-center gap-x-2 text-sm">
              <p className="text-gray-500 hover:text-blue-500">Dashboard</p>
              <p>/</p>
              <p className="text-black">
                {path === '/' ? "Home" : path.replace(/^\/(.)/, (_, firstChar) => firstChar.toUpperCase())}
              </p>
            </h1>
            <h2 className="font-semibold text-black">
              {path === '/' ? "Home" : path.replace(/^\/(.)/, (_, firstChar) => firstChar.toUpperCase())}
            </h2>
          </div>
          <input
            placeholder="Search"
            onKeyDown={handleEnter}
            onChange={onChange}
            value={url}
            className="bg-[#F5F7F8] rounded-lg flex flex-shrink
            border border-gray-600 text-sm p-2
            placeholder:text-[#607D8B] placeholder:border-[#B0BFC5]
          "/>
        </div>
        <div
          className={`flex min-w-[10rem] justify-end 
          items-center pr-2 pt-1 text-[#607D8B]
          ${searchPosition? "" : "-mt-16" } 
        `}>
          <ul className="flex justify-between items-center gap-5">
            <ButtonOrSign />
            {/*<li className={`${context.displaySideNavbar?.display?"":"hidden"}`}>*/}
            {/*  <button*/}
            {/*    className="flex items-center"*/}
            {/*    onClick={() => context.displaySideNavbar.setDisplay(val => !val)}*/}
            {/*  >*/}
            {/*    <Bars3Icon className="w-5"/>*/}
            {/*  </button>*/}
            {/*</li>*/}
            {/*<li className="flex items-center gap-1">*/}
            {/*  <button className="flex items-center">*/}
            {/*    <UserCircleIcon*/}
            {/*      className="w-5"*/}
            {/*    />*/}
            {/*    <p className={`${context.displaySideNavbar?.display ? "hidden" : ""} font-semibold text-xs`}>*/}
            {/*      Sign In*/}
            {/*    </p>*/}
            {/*  </button>*/}
            {/*</li>*/}
            <li>
              <button className="flex items-center">
                <BellIcon className="w-5"/>
              </button>
            </li>
            <li>
              <button onClick={handleSettingBar}>
                <Cog6ToothIcon className="w-5 mt-2"/>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
