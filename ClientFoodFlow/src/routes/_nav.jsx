import React from 'react'
import CIcon from '@coreui/icons-react'
import { // Pa importar iconos 
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react' // LOS DIFERENTES COMPONENTES DEL MENU

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Accordion' },
      { component: CNavItem, name: 'Breadcrumb' },
      { component: CNavItem, name: 'Cards' },
      { component: CNavItem, name: 'Carousel' },
      { component: CNavItem, name: 'Collapse' },
      { component: CNavItem, name: 'List group' },
      { component: CNavItem, name: 'Navs & Tabs' },
      { component: CNavItem, name: 'Pagination' },
      { component: CNavItem, name: 'Placeholders' },
      { component: CNavItem, name: 'Popovers' },
      { component: CNavItem, name: 'Progress' },
      { component: CNavItem, name: 'Spinners' },
      { component: CNavItem, name: 'Tables' },
      { component: CNavItem, name: 'Tabs' },
      { component: CNavItem, name: 'Tooltips' },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Buttons' },
      { component: CNavItem, name: 'Buttons groups' },
      { component: CNavItem, name: 'Dropdowns' },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Checks & Radios' },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Date Picker'}
            <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      { component: CNavItem, name: 'Floating Labels' },
      { component: CNavItem, name: 'Form Control' },
      { component: CNavItem, name: 'Input Group' },
      { component: CNavItem, name: 'Range' },
      { component: CNavItem, name: 'Select' },
      { component: CNavItem, name: 'Layout' },
      { component: CNavItem, name: 'Validation' },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'CoreUI Free' },
      { component: CNavItem, name: 'CoreUI Flags' },
      { component: CNavItem, name: 'CoreUI Brands' },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Alerts' },
      { component: CNavItem, name: 'Badges' },
      { component: CNavItem, name: 'Modal' },
      { component: CNavItem, name: 'Toasts' },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Login' },
      { component: CNavItem, name: 'Register' },
      { component: CNavItem, name: 'Error 404' },
      { component: CNavItem, name: 'Error 500' },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
