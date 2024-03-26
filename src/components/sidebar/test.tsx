



import Sidebar from './sidebar.styles.ts'
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";

import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import {NavLink, useLocation} from 'react-router-dom';
import clsx from "clsx";

interface MenuItem {
    title: string;
    icon: React.ReactNode;
    isActive?: boolean;
    href?: string;
}

interface Menu {
    title: string;
    items: MenuItem[];
}

const menus: Menu[] = [
    {
        title: "Main Menu",
        items: [
            { title: "Accounts", icon: <AccountsIcon />, href: "/accounts" },
            { title: "Payments", icon: <PaymentsIcon />, href: "/payments" },
            {
                title: "Balances",
                icon: <BalanceIcon />,
                items: ["Banks Accounts", "Credit Cards", "Loans"],
            },
            { title: "Customers", icon: <CustomersIcon />, href: "/customers" },
            { title: "Products", icon: <ProductsIcon />, href: "/products" },
            { title: "Reports", icon: <ReportsIcon />, href: "/reports" },
        ],
    },
    {
        title: "General",
        items: [
            { title: "Developers", icon: <DevIcon />, href: "/developers" },
            { title: "View Test Data", icon: <ViewIcon />, href: "/view" },
            { title: "Settings", icon: <SettingsIcon />, href: "/settings" },
        ],
    },
    {
        title: "Updates",
        items: [{ title: "Changelog", icon: <ChangeLogIcon />, href: "/changelog" }],
    },
];

export const SidebarItem = ({ icon, title, isActive, href = "" }: MenuItem) => {
    const { collapsed, setCollapsed } = useSidebarContext();

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setCollapsed();
        }
    };

    return (
        <NavLink to={href} className="text-slate-900 active:bg-none max-w-full">
            <div className="text-default-900 active:bg-none max-w-full">
                <div
                    className={clsx(
                        isActive ? "bg-primary-100 [&_svg_path]:fill-primary-500" : "hover:bg-default-100",
                        "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                    )}
                    onClick={handleClick}
                >
                    {icon}
                    <span className={clsx(isActive ? "text-blue-600" : "text-slate-900")}>{title}</span>
                </div>
            </div>
        </NavLink>
    );
};

const SidebarMenu = ({ title, items }: Menu) => (
    <div className="mb-6">
        <h2 className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">{title}</h2>
        {items.map((item, index) => (
            <SidebarItem key={index} {...item} />
        ))}
    </div>
);

const SidebarWrapper = () => (
    <div>
        {menus.map((menu, index) => (
            <SidebarMenu key={index} {...menu} />
        ))}
    </div>
);

export default SidebarWrapper;