import type { FC } from 'react'
import site from '~/site.yml'
import image from '~/assets/profile.jpg?w=65&h=65'
import style from './header.module.scss'

const Header: FC = () => (
  <header className="py-8">
    <div className={style.header__main}>
      <a className="avatar" href="/" rel="prefetch">
        <div className="rounded-full w-[65px]">
          <img src={image} width={65} height={65} alt={site.name} />
        </div>
      </a>
      <a className={style.header__title} href="/" rel="prefetch">
        {site.name}
      </a>
      <span>{site.slogan}</span>
    </div>
    <div className={style.header__main}>
      <ul className="menu menu-horizontal">
        {site.menu.map((menu) => (
          <li key="menu.path">
            <a href={menu.path} rel="prefetch">
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header
