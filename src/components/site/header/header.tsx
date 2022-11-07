import type { FC } from 'react'
import site from '~/site.yml'
import style from './header.module.scss'

const image = 'https://placekitten.com/100/100'

const Header: FC = () => (
  <header className="py-8">
    <div className={style.header__main}>
      <a className="avatar" href="/">
        <div className="rounded-full w-[65px]">
          <img src={image} width={65} height={65} alt={site.name} />
        </div>
      </a>
      <a className={style.header__title} href="/">
        {site.name}
      </a>
      <span>{site.slogan}</span>
    </div>
    <div className={style.header__main}>
      <ul className="menu menu-horizontal">
        {site.menu.map((menu) => (
          <li key="menu.path">
            <a href={menu.path}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header
