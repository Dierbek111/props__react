import Card from './Card/Card'
import './Header.scss'
import React from 'react'
import Title from './Title/Title'

const Header = () => {
  return (
    <>
    <Title>TRANSPORT</Title>

    <div className="wrap">
        <Card name="Velosiped" img="https://mini-io-api.texnomart.uz/catalog/product/3570/357016/196824/1da1d7d0-87f4-4a0e-8cbb-d818aa9a2f6d.webp"/>
        <Card name="Scooter" img="https://cdn.powergo.ca/media/catalog/2024/4/56feff3709234ab5bfa1c580690c8326_1024x768_webp/2024-yamaha-xmax-matte-raven-black-0.webp"/>
        <Card name="Samokat" img="https://gyroor.com/cdn/shop/products/GyroorH30kidselectricscooterblack-min.jpg?v=1662029381&width=1080"/>
        <Card/>
    </div>
    </>
  )
}

export default Header