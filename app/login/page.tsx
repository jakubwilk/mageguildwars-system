import type { Metadata } from 'next'
import { LoginPage } from 'auth/pages'

export const metadata: Metadata = {
  title: 'Mage Guild Wars | Logowanie do aplikacji MGW',
  description:
    'Zaloguj się na swoje konto użytkownika, by móc rozpocząć lub kontynuować niesamowitą przygodę w świecie pełnym magii inspirowanej anime i mangą Fairy Tail'
}

export default function Login() {
  return <LoginPage />
}
