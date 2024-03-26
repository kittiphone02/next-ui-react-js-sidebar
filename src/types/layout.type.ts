
import { ForwardRefExoticComponent, SVGProps } from "react"
import { IconType } from "react-icons"
export interface IRout {
    name: string
    description: string
    path: string
    color?: string
    target?: "_blank" | "_self" | "_parent" | "_top" | string
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>> | IconType | any
    isOnline: boolean
    isAuthAccess?: boolean // if true, this route is accessible by any role
    // authorizes?: UserRole[] // role that can access this route
}