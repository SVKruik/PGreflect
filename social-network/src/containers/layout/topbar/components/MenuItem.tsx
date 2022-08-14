import { FC } from 'react'
import classNames from 'classnames'

interface MenuItemProps {
    addressTo?: string;
    isActive?: boolean;
    children: JSX.Element | string;
}

const MenuItem: FC<MenuItemProps> = ({ addressTo, isActive, children }) => {
    const menuItemClasses = classNames({
        "main-menu_list-item": true,
        active: isActive,
    });

    return (
        <li className={menuItemClasses}>
            <a href={addressTo}>{children}</a>
        </li>
    )
}

export default MenuItem