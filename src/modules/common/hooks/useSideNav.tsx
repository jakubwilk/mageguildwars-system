'use client'

import { IAppNavbar } from '@modules/common'
import { isEmpty } from 'lodash'

import { MAIN_NAVBAR } from '../utils/navbar-app.utils'

type TNavbarAppOptions = Pick<IAppNavbar, 'slug' | 'isDisabled'>

const useSideNav = (options?: Array<TNavbarAppOptions>) => {
  if (isEmpty(options)) {
    return { menu: MAIN_NAVBAR }
  }

  return { menu: [] }
}

export default useSideNav
