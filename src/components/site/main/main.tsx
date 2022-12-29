import type { FC, PropsWithChildren } from 'react'
import style from './main.module.scss'

const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className={style.main}>{children}</main>
)

export default Main
