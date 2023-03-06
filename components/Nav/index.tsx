// If Headless-styles shipped CSS, Server components will work
// see: https://beta.nextjs.org/docs/styling/css-in-js
'use client'

import {
  getButtonProps,
  getGridProps,
  getGridItemProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { HomeIcon, BriefcaseIcon } from '@pluralsight/icons'
import Link from 'next/link'
import { type PropsWithChildren } from 'react'
import styles from './nav.module.css'

function NavListItem(props: PropsWithChildren<{}>) {
  const gridItem = getGridItemProps({ colSpan: 6 })
  return <li {...gridItem}>{props.children}</li>
}

interface NavLinkProps {
  href: string
  icon: any
}

function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const { button, iconOptions } = getButtonProps({
    usage: 'text',
  })
  const Icon = props.icon

  return (
    <Link {...button} href={props.href}>
      <Icon {...getIconProps(iconOptions)} />
      {props.children}
    </Link>
  )
}

export default function Nav() {
  const { className, ...gridProps } = getGridProps({ cols: 12, gap: 6 })

  return (
    <nav className={styles.container}>
      <ul className={`${className} ${styles.navList}`} {...gridProps}>
        <NavListItem>
          <NavLink href="/" icon={HomeIcon}>
            Home
          </NavLink>
        </NavListItem>

        <NavListItem>
          <NavLink href="/work" icon={BriefcaseIcon}>
            Work
          </NavLink>
        </NavListItem>
      </ul>
    </nav>
  )
}
