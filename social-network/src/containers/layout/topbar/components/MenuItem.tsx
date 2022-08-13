import { FC } from 'react'

interface MenuItemProps {
    title: string;
    addressTo?: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, addressTo }) => {
    return (
        <li className="main-menu_list-item">
            <a href={addressTo}>{title}</a>
        </li>
    )
}

export default MenuItem