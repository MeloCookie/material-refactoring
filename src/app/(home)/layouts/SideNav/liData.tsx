import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ReportIcon from '@mui/icons-material/Report';
import LoginIcon from '@mui/icons-material/Login';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import {LinkedLiProps} from "./SideNavLi";

export const dashboardItem: LinkedLiProps[] = [
  {
    name: 'Dashboard',

    href: '/',

    icon: <HomeIcon/>,

    printName:true

  },
  {
    name: 'Profile',

    href: '/profile',

    icon: <AccountCircleIcon/>,

    printName:true

  },
  {
    name: 'Tables',

    href: '/tables',

    icon: <BackupTableIcon/>,

    printName:true

  },
  {
    name: 'Notifications',

    href: '/notifications',

    icon: <ReportIcon/>,

    printName:true

  },
  {
    name: 'Axios',

    href: '/axios',

    icon: <FindInPageIcon/>,

    printName:true

  },
]

export const authPage: LinkedLiProps[] = [
  {
    name: 'Log In',

    href: '/login',

    icon: <LoginIcon/>,

    printName:true

  },
  {
    name: 'Sign Up',

    href: '/sign-up',

    icon: <WebStoriesIcon />,

    printName:true

  },
]

