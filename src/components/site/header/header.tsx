import type { FC } from 'react'
import site from '~/site.yml'
import image from '~/assets/profile.jpg?w=65&h=65'
import MenuIcon from '~icons/carbon/menu'
import style from './header.module.scss'

const Header: FC = () => (
  <header className="py-8">
    <HeaderMain />
    <Menu />
  </header>
)

const HeaderMain: FC = () => (
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
)

const Menu: FC = () => (
  <div className={style.header__main}>
    <MenuDesktop />
    <MenuMobile />
  </div>
)

const MenuMobile: FC = () => (
  <div className="dropdown md:hidden">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
      <MenuIcon className="text-lg" />
    </label>
    <ul
      tabIndex={0}
      className={`dropdown-content menu menu-compact ${style.menu__dropdown}`}
    >
      {site.menu.map((menu) => (
        <li key="menu.path">
          <a href={menu.path} rel="prefetch">
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const MenuDesktop: FC = () => (
  <ul className="md:menu md:menu-horizontal hidden">
    {site.menu.map((menu) => (
      <li key="menu.path">
        <a href={menu.path} rel="prefetch">
          {menu.name}
        </a>
      </li>
    ))}
  </ul>
)

export default Header
