import {useState} from "react";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {Twitter, FacebookRounded} from "@mui/icons-material";
import {useLayoutConfigContext} from "@utils/Contexts/LayoutConfigContext";
import Link from "next/link";
import GradeIcon from '@mui/icons-material/Grade';
import Image from "next/image";


const colors = [
  {name: 'white' ,color:'bg-white'},
  {name: 'black' ,color:'bg-black'},
  {name: 'green' ,color:'bg-green-400'},
  {name: 'yellow' ,color:'bg-amber-500'},
  {name: 'orange' ,color:'bg-orange-600'},
  {name: 'red', color:'bg-rose-500'}
]
const ColorSpan = (
  {colors}: {colors: {name: string, color: string}[]}
) => {
  const [selected, setSelected] =
    useState<string>('black');

  const {sideNavColor} = useLayoutConfigContext()
  const onSelected = (name: string, color: string) => {
    setSelected(name);
    sideNavColor.setColor(color);
  }

  return (
    <ul className="flex my-2 gap-2">
      {
        colors.map((item) => {
          return (
            <span
              key={crypto.randomUUID()}
              onClick={() => onSelected(item.name, item.color)}
              className={`rounded-full w-6 h-6 border-black hover:scale-110 
              cursor-pointer ${item.name === selected ? 'border' : ''} 
              ${item.color === "bg-white" ? "bg-neutral-200" : item.color} 
              
            `}/>
          )
        })
      }
    </ul>
  )
}

const sidenavTypes = [

  {name: 'DARK', value: 'bg-neutral-800'},

  {name: 'TRANSPARENT', value: 'bg-transparent'},

  {name: 'WHITE', value: 'bg-white'},

]
const NavbarType = ({
  sidenavTypes
}: {
  sidenavTypes: {name:string, value: string}[]
})  => {
  const [selected, setSelected] =
    useState('WHITE')

  const layoutConfigContext =
    useLayoutConfigContext()
  const onSelected = (key: string, value: string) => {
    setSelected(key)
    layoutConfigContext.sideNavType.setType(value)
  }

  return (
    <>
      {
        sidenavTypes.map((key) => {
          return (
            <button
              key={key.name}
              onClick={() => onSelected(key.name, key.value)}
              className={`flex justify-center basis-auto
              grow h-[2.5rem] items-center rounded-xl border-black
              text-center border text-sm font-semibold
              ${key.name === "TRANSPARENT" ? "" : "flex-1"}
              ${key.name === selected ? "bg-neutral-700 text-white" : ""}
            `}>
              {key.name}
            </button>
          )
        })

      }
    </>
  )
}

const SettingBar = (

) => {
  const {
    fixedTopBar,
    toggleSettingBar
  } = useLayoutConfigContext()

  const handleSettingBar  = () => {
    toggleSettingBar.setToggle(val => !val)
  }

  return (
    <aside
      className={`flex flex-col fixed right-0 top-0 h-full w-[24rem] bg-white 
      rounded-lg p-8 gap-10 font-semibold z-50 transition-transform
      ${toggleSettingBar.toggle ? "translate-x-0" : "translate-x-[25rem]"}
    `}>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-xl">
            Dashboard Configurator
          </h1>
          <p className="text-base text-gray-500 font-light">
            See our dashboard options.
          </p>
        </div>
        <button
          onClick={handleSettingBar}
          className="mb-4 mr-1 p-2"
        >
          <XMarkIcon className="w-5"/>
        </button>
      </div>
      <div className="">
        <h1>Sidenav Colors</h1>
        <ColorSpan colors={colors}/>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Sidenav Types</h1>
        <p className="text-sm text-gray-400 font-light">
          Choose between 3 different sidenav types.
        </p>
        <ul
          className="flex justify-between items-centermt-3 mt-3 gap-2 h-[3rem]"
        >
          <NavbarType sidenavTypes={sidenavTypes} />
        </ul>
      </div>
      <div className="flex justify-between border-y py-5">
        <h1>Navbar Fixed</h1>

      </div>
      <ul
        className="flex flex-col items-center
        text-xs text-gray-500 gap-4
        "
      >
        <li className="flex w-full">
          <Link
            href="https://www.creative-tim.com/product/material-tailwind-dashboard-react
            ?rel=mtdr&_ga=2.228210973.1893661541.1708872724-1427294454.1707985427"
            className="flex w-full"
          >
            <p
              className="flex rounded-lg w-full h-10 justify-center items-center
              text-white bg-neutral-700 shadow-md"
            >
              FREE DOWNLOAD
            </p>
          </Link>
        </li>
        <li className="flex w-full">
          <Link
            href="https://www.material-tailwind.com/docs/react/installation?rel=mtdr"
            className="flex w-full"
          >
            <p
              className="flex rounded-lg w-full h-10 justify-center items-center
              border-neutral-700 border shadow-md"
            >
              VIEW DOCUMENTATION
            </p>
          </Link>
        </li>
        <li className="flex w-full">
          <Link
            className="flex w-full"
            href="https://www.material-tailwind.com/blocks/react?rel=mtdr"
          >
            <p
              className="flex rounded-lg w-full h-10 justify-center items-center
              border-[#2E2E2E] border shadow-md"
            >
              MATERIAL TAILWIND PRO
            </p>
          </Link>
        </li>
      </ul>
      <button className="flex justify-center items-center gap-1">
        <Link
          href="https://github.com/"
          target="_blank"
          className="flex items-center p-1 px-2 gap-x-2
          bg-[#2E2E2E] text-white text-xs rounded-lg"
        >
          <GradeIcon fontSize="small"/>
          <p>254-STARS</p>
        </Link>
        <Image
          src="./img/github.svg" alt="github"
          width="40" height="40"
        />
      </button>
      <div className="flex flex-col items-center gap-5">
        <p>Thank you for sharing ❤️</p>
        <div className="flex gap-2 text-xs">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="flex items-center bg-[#2E2E2E]
            rounded-lg text-white p-2 px-6 h-10 gap-1"
          >
            <Twitter fontSize="small" /> TWEET
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="flex items-center bg-[#2E2E2E]
            rounded-lg text-white p-2 px-6 h-10 gap-1"
          >
            <FacebookRounded fontSize="small" /> SHARE
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default SettingBar

