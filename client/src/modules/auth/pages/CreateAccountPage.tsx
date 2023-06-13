import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { RegisterForm, RegisterRules, RegisterWrapper } from '@auth'

function CreateAccountPage() {
  return (
    <Fragment>
      <Helmet>
        <title>{'Tworzenie nowego konta | Mage Guild Wars'}</title>
      </Helmet>
      <RegisterWrapper form={<RegisterForm />} rules={<RegisterRules />} />
    </Fragment>
  )
}

export default CreateAccountPage
