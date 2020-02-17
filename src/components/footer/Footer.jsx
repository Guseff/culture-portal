import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <address>
        <a>Тут будут ссылки на наши контакты</a>
        <Link to="/">О нас</Link>
      </address>
    </footer>
  )
}

export default Footer
