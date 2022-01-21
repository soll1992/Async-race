import React from 'react'
import { Link } from 'react-router-dom'
import './nav-link.scss';

interface Props {
    textContent: string,
    link: string,

}

export function NavLink(props: Props) {
    return (
        <div className='nav-link'>
            <Link className='link' to={props.link}>{props.textContent}</Link>
        </div>
    )
}
