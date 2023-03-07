import { NextApiRequest, NextApiResponse } from 'next'

interface IMage {
  id: string
  username: string
  avatarUrl: string
  mainGroup: string
  additionalGroups: Array<string>
  created: Date
  updated: Date
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: Array<IMage> = [
    {
      id: '548cc4fc-82dc-4f50-8c41-42ec15449e4a',
      username: 'Ryu',
      avatarUrl: 'https://mageguildwars.pl/uploads/avatars/avatar_74.jpg',
      mainGroup: 'Grimoire Heart',
      additionalGroups: ['Użytkownicy'],
      created: new Date('10-12-2022'),
      updated: new Date('12-12-2022'),
    },
    {
      id: 'a9177a9d-3160-4a33-b8d2-f7392211e384',
      username: 'Damer',
      avatarUrl: 'https://mageguildwars.pl/uploads/avatars/avatar_95.jpg',
      mainGroup: 'Fairy Tail',
      additionalGroups: ['Użytkownicy', 'Strażnicy'],
      created: new Date('15-12-2022'),
      updated: new Date('03-02-2023'),
    },
  ]

  res.status(200).json({ data })
}
