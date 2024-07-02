import type { Metadata } from 'next'
import { RegisterPage } from 'auth/pages'

export const metadata: Metadata = {
  title: 'Mage Guild Wars | Zakładanie nowego konta',
  description:
    'Stwórz swojego unikalnego bohatera i rozpocznij przygodę w świecie pełnym magii i różności inspirowanej anime i mangą Fairy Tail'
}

export default function Register() {
  return <RegisterPage />
}
