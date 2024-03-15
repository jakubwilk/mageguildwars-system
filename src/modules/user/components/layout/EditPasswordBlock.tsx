import { Box, LoadingOverlay, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLock } from '@tabler/icons-react'
import clsx from 'clsx'

import { useResources } from '../../../resources/hooks'

import { EditPasswordBlockForm } from './EditPasswordBlockForm.tsx'

import '@mantine/core/styles/Title.layer.css'
import classes from './Layout.module.css'

export function EditPasswordBlock() {
  const { getResource } = useResources('USER')
  const [visible, { open: handleOpenOverlay, close: handleCloseOverlay }] =
    useDisclosure(false)

  return (
    <Box className={'rounded-md overflow-hidden'} pos={'relative'}>
      <LoadingOverlay
        loaderProps={{ color: 'violet' }}
        overlayProps={{ blur: 1 }}
        visible={visible}
        zIndex={100}
      />
      <section className={clsx('p-8 rounded-md', classes.editUserBlock)}>
        <Title
          className={clsx(
            'flex items-center mb-8 break-words',
            classes.editUserBlockTitle,
          )}
          order={2}
        >
          <IconLock
            className={clsx('mr-2', classes.editUserBlockTitleIcon)}
            stroke={1.5}
            style={{ height: '18px', width: '18px' }}
          />
          {getResource('EDIT_USER_BLOCK_CHANGE_PASSWORD_TEXT')}
        </Title>
        <EditPasswordBlockForm
          handleCloseOverlay={handleCloseOverlay}
          handleOpenOverlay={handleOpenOverlay}
        />
      </section>
    </Box>
  )
}
