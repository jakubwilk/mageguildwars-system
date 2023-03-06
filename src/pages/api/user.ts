import type { NextApiRequest, NextApiResponse } from 'next'

interface IUser {
  id: string
  slug: string
  username: string
  title: string
  messagesCount: number
  notificationsCount: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: IUser = {
    id: '81448a84-4d67-4b85-9c0e-3b55665b878b',
    slug: 'ryu',
    username: 'Ryu',
    title: 'Grimoire Heart',
    messagesCount: 0,
    notificationsCount: 0,
  }

  res.status(200).json(data)
}
