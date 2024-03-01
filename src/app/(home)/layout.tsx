'use client'
import {ReactNode, useEffect, useState} from "react";
import Container from "@/component/Containers/Container";
import SideNav from "@app/(home)/layouts/SideNav/SideNav";
import {LayoutConfigProvider} from "@utils/Contexts/LayoutConfigContext";
import Header from '@app/(home)/layouts/Header'
import {lgOrMd} from "@utils/screenSize";
import SettingBar from "@app/(home)/layouts/Setting/SettingBar";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [isLg, setIsLg] =
    useState(lgOrMd())
  const handleLayout = () => {
    setIsLg(lgOrMd)
  }

  useEffect(() => {
    handleLayout()
    window.addEventListener('resize', handleLayout)
    return () => window.removeEventListener('resize',handleLayout)
  }, [window]);

  return (
    <Container id="root-layout" className="w-screen h-screen flex text-slate-500 bg-neutral-100 subpixel-antialiased">
      <LayoutConfigProvider>
      {/*SideNav z-50, SettingBar z-50*/}
        <SideNav />
        <SettingBar />
        <main className={`flex flex-col w-full ${isLg? "ml-80" : ""}`}>
          <Header />
          {children}
        </main>
      </LayoutConfigProvider>
    </Container>
  );
}
export default RootLayout
