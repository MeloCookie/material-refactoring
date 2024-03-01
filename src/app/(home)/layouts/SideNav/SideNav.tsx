'use client'
import Container from "@component/Containers/Container";
import {useCallback, useContext, useEffect} from "react";
import {useLayoutConfigContext} from "@utils/Contexts/LayoutConfigContext";
import {lgOrMd} from "@utils/screenSize";
import SideNavLi from "@app/(home)/layouts/SideNav/SideNavLi";
import {authPage, dashboardItem} from "@app/(home)/layouts/SideNav/liData";
import {usePathname, useRouter} from "next/navigation";
const SideNav = () => {
  const {
    toggleSideNavBar,
    sideNavType
  } = useLayoutConfigContext();

  const router = useRouter()
  const path = usePathname()

  const className =
    `flex flex-col w-[18rem] fixed h-[calc(100vh-30px)] justify-start py-6
    items-center gap-10 border-2 transition-transform rounded-xl z-50 
    ${lgOrMd() || toggleSideNavBar.toggle
      ? "translate-x-0" : "-translate-x-80"} ${sideNavType.type} 
    ${sideNavType.type === 'bg-neutral-800' ? "text-white" : ""
  } `

  return (
    <Container tag="aside" className={className}>
      <header>Material Tailwind React</header>
      <section className="flex flex-col w-full gap-6 text-base">
        <SideNavLi
          list={dashboardItem} currentPath={path}
          ulClass={`flex flex-col w-full rounded-lg gap-1`}
          liClass={`flex w-full p-3 gap-4 rounded-lg`}
        />
        <SideNavLi
          header="AUTH PAGES"
          list={authPage} currentPath={path}
          ulClass={`flex flex-col w-full rounded-lg gap-1 text-base font-semibold`}
          liClass={`flex w-full p-3 gap-4 w-full gap-4 rounded-lg`}
        />
      </section>
    </Container>
  )
}
export default SideNav
