import { useMemo } from 'react'
import { FeatureSinglePanel, SingleFeaturePanel, useFeaturePanels } from '@feature-panel'
import { Grid, Loader } from '@mantine/core'

function FeaturePanels() {
  const { data, isLoading } = useFeaturePanels()

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
        {data.map(({ id, title, description, created, link, coverImageUrl }: SingleFeaturePanel) => (
          <Grid.Col xs={12} sm={6} lg={4} key={id}>
            <FeatureSinglePanel
              id={id}
              link={link}
              title={title}
              description={description}
              coverImageUrl={coverImageUrl}
              created={created}
            />
          </Grid.Col>
        ))}
      </Grid>
    )
  }, [data])

  return <div className={'container mx-auto my-4'}>{isLoading ? loadingOverlay : panelGrid}</div>
}

export default FeaturePanels
