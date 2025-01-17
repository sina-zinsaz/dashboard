import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface MenuItem {
    title: string;
    link: string;
    icon: any;
}


export const menu: MenuItem[] = [
    {
        title: 'Dashboard',
        link: 'dashboard',
        icon: DashboardIcon
    },
    {
        title: 'Todo List',
        link: 'todo-list',
        icon: FormatListBulletedIcon
    },
    {
        title: 'Profile',
        link: 'profile',
        icon: AccountCircleIcon
    }
];
