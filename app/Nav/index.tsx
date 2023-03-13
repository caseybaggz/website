'use client'

// This could be a server component

import {
  getTextLinkProps,
  getGridProps,
  getGridItemProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { HomeIcon, BriefcaseIcon } from '@pluralsight/icons'
import Link from 'next/link'
import { type PropsWithChildren } from 'react'
import styles from './nav.module.css'

function NavListItem(props: PropsWithChildren<{}>) {
  const { className, style } = getGridItemProps({ colSpan: 6 })
  return (
    <li className={`${className} ${styles.listItem}`} style={style}>
      {props.children}
    </li>
  )
}

interface NavLinkProps {
  href: string
  icon: any
}

function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const { link, iconOptions } = getTextLinkProps({
    href: props.href,
  })
  const Icon = props.icon

  return (
    <Link {...link}>
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
