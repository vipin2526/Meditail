import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
export default function Header() {
  return (
    <div className='header'>
      <ul className='headerRoutes'>
        <li style={{ marginRight: 'auto' }}> <img src="/logo192.png" alt="not found" height={40} /> </li>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/treatments'}>TREATMENTS</Link></li>
        <li><Link to={'/hospital'}>HOSPITAL</Link></li>
        <li><Link to={'/services'}>SERVICES</Link></li>
      </ul>
    </div>
  )
}
