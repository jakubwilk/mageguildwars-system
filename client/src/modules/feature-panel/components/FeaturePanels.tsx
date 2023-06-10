import { useMemo } from 'react'
import { useAppLayoutContext } from '@common'
import { FeatureSinglePanel, SingleFeaturePanel, useFeaturePanels } from '@feature-panel'
import { Grid, Loader } from '@mantine/core'

function FeaturePanels() {
  const { isHomePage } = useAppLayoutContext()
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
      <Grid grow gutter={'xl'}>
        {data.map(({ id, title, description, created, link, coverImageUrl }: SingleFeaturePanel) => (
          <Grid.Col xs={12} sm={6} lg={isHomePage ? 4 : 3} key={id}>
            <FeatureSinglePanel
              id={id}
              link={link}
              title={title}
              description={description}
              coverImageUrl={coverImageUrl}
              created={created}
              isCompact={isHomePage}
            />
          </Grid.Col>
        ))}
      </Grid>
    )
  }, [data, isHomePage])

  return <div className={'container mx-auto mb-4'}>{isLoading ? loadingOverlay : panelGrid}</div>
}

export default FeaturePanels
