import { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Loader, Overlay, Text } from '@mantine/core'
import { format } from 'date-fns'

import { useFeaturePanels } from '../hooks'
import { SingleFeaturePanel } from '../models'

function FeaturePanels() {
  const { data, isLoading } = useFeaturePanels()

  const renderDate = useCallback((date: Date) => {
    return format(new Date(date), 'dd MMMM yyyy')
  }, [])

  const loadingOverlay = useMemo(() => {
    return (
      <div className={'relative flex justify-center items-center min-h-[300px]'}>
        <Loader size={'lg'} color={'gray'} />
      </div>
    )
  }, [])

  const panelGrid = useMemo(() => {
    return (
      <Grid grow>
        {data.map(({ id, title, description, created, link, coverImageUrl, altImageText }: SingleFeaturePanel) => (
          <Grid.Col xs={12} sm={6} lg={4} key={id}>
            <Link to={link} className={'relative h-[250px]'}>
              <div className={'relative flex flex-col justify-end p-6 h-[250px] z-[300]'}>
                <Text fz={'lg'} fw={700} className={'uppercase mb-2'}>
                  {title}
                </Text>
                <Text>{description}</Text>
                <Text size={'sm'}>{renderDate(created)}</Text>
              </div>
              <Overlay color={'#000'} opacity={0.7} />
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    )
  }, [data])

  return <div className={'container mx-auto my-4'}>{isLoading ? loadingOverlay : panelGrid}</div>
}

export default FeaturePanels
