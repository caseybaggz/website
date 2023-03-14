import {
  getJSTextLinkProps,
  getJSGridProps,
  getJSGridItemProps,
  getJSIconProps,
} from '@pluralsight/headless-styles'
import { HomeIcon, BriefcaseIcon } from '@pluralsight/icons'
import Link from 'next/link'
import { type PropsWithChildren } from 'react'
import styles from './nav.module.css'

function NavListItem(props: PropsWithChildren<{}>) {
  const gridItemProps = getJSGridItemProps({ colSpan: 6 })
  return (
    <li className={styles.listItem} style={gridItemProps.styles}>
      {props.children}
    </li>
  )
}

interface NavLinkProps {
  href: string
  icon: any
}

function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const linkProps = getJSTextLinkProps({
    href: props.href,
  })
  const Icon = props.icon
  const iconProps = getJSIconProps(linkProps.iconOptions)

  return (
    <Link style={linkProps.styles} {...linkProps.link}>
      <Icon {...iconProps.a11yProps} style={iconProps.styles} />
      {props.children}
    </Link>
  )
}

export default function Nav() {
  const gridProps = getJSGridProps({ cols: 12, gap: 6 })

  return (
    <nav className={styles.container}>
      <ul className={styles.navList} style={gridProps.styles}>
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
