'use client'
import { ReactNode } from 'react'
import { Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MainNavbar, SidebarNavbar } from '@modules/common'

interface IProps {
  children: ReactNode
}

const AppLayout = ({ children }: IProps) => {
  const [opened, { open: openNavbar, close: closeNavbar }] = useDisclosure()

  return (
    <>
      <Drawer
        opened={opened}
        onClose={closeNavbar}
        title={'Mage Guild Wars'}
        offset={8}
        radius={'md'}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <SidebarNavbar />
      </Drawer>
      <MainNavbar handleOpenNav={openNavbar} />
      <div className={'w-full py-8 mb-4'} />
      {children}
    </>
  )
}

export default AppLayout
