import { Fragment, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthRulesResponseSnapshot, RegisterRuleSection, useCreateAccountRulesQuery } from '@auth'
import { Box, createStyles, Divider, Loader, ScrollArea, Text } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  content: {
    backgroundColor: theme.colors.dark[8],
  },
  divider: {
    borderColor: theme.colors.dark[6],
  },
  title: {
    color: theme.colors.gray[5],
    fontSize: '2rem !important',
  },
  ruleTitle: {
    color: theme.colors.gray[6],
  },
  rule: {
    color: theme.colors.gray[6],
  },
}))

interface IProps {
  formCheckbox?: ReactNode
}

function RegisterRules({ formCheckbox }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { data, isLoading } = useCreateAccountRulesQuery()
  const [rules, setRules] = useState<Array<AuthRulesResponseSnapshot>>([])

  const renderRule = useCallback(
    (rule: Array<{ id: string; text: string }>) => {
      return rule.map(({ id, text }) => (
        <Text key={id} className={clsx('mt-2', classes.rule)}>
          {text}
        </Text>
      ))
    },
    [classes.rule]
  )

  const isDataNotReady = useMemo(() => isLoading && !data, [isLoading, data])

  useEffect(() => {
    if (data) {
      setRules(data)
    }
  }, [data])

  return (
    <Box className={clsx('w-full p-4 md:p-8 rounded-md h-full md:max-h-[80vh]', classes.content)}>
      {isDataNotReady ? (
        <div className={'flex justify-center items-center p-8'}>
          <Loader color={'dark'} size={'xl'} />
        </div>
      ) : (
        <Fragment>
          <Text component={'h2'} ta={'center'} fz={'xl'} tt={'uppercase'} fw={700} className={classes.title}>
            {t('auth:pages.register.rulesTitle')}
          </Text>
          <Divider my={'lg'} className={classes.divider} />
          <ScrollArea.Autosize mah={'70vh'}>
            {rules && rules.map((rule) => <RegisterRuleSection key={rule.id} title={rule.title} content={renderRule(rule.content)} />)}
          </ScrollArea.Autosize>
        </Fragment>
      )}
    </Box>
  )
}
export default RegisterRules
