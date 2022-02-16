import React from 'react';
import { Link } from 'react-router-dom';
import './nav-link.scss';

interface Props {
    textContent: string;
    link: string;
}

export default function NavLink({ textContent, link }: Props) {
  return (
    <div className="nav-link">
      <Link className="link" to={link}>
        {textContent}
      </Link>
    </div>
  );
}
