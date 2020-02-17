import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="">
      <div>Название проекта</div>
      <nav className="">
        <ul>
          <Link to="/">
            <li>На главную</li>
          </Link>
          <Link to="/">
            <li>Писатели</li>
          </Link>
          <Link to="/">
            <li>О нас</li>
          </Link>
        </ul>
      </nav>
      <ul>
        <Link to="/">
          <li>ru</li>
        </Link>
        <Link to="/">
          <li>eng</li>
        </Link>
        <Link to="/">
          <li>be</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
