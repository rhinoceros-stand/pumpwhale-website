import { useEffect } from 'react'
import useAxios from 'axios-hooks'
import TreeMap from '../../components/TreeMap'

const AIAgentPage = () => {
  const tokenList = [
    'Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump',
    '9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump',
    '5QS7RcHfGUa2ZtrovPvEJMB9coqroiT7H48dPSwFpump',
    '2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv',
    '61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump',
    'DKu9kykSfbN5LBfFXtNNDPaX35o4Fv6vJ9FKk7pZpump',
    '8x5VqbHA8D7NkD52uNuS5nnt3PwA8pLD34ymskeSo2Wn',
    '74SBV4zDXxTRgv1pEMoECskKBkZHc2yGPnc7GYVepump',
    '9DHe3pycTuymFk4H4bbPoAJ4hQrr2kaLDF6J6aAKpump',
    'B8hCuoikV9gLeuwmTyhNdLbPnb5k3P77Q7WTtEM7pump',
    'GekTNfm84QfyP2GdAHZ5AgACBRd69aNmgA5FDhZupump',
    'eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump',
    'KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP',
    'KENJSUYLASHUMfHyy5o4Hp2FdNqZg1AsUPhfH2kYvEP',
    'Hjw6bEcHtbHGpQr8onG3izfJY5DJiWdt7uk2BfdSpump'
  ]

  const [
    {
      data,
      loading,
      error
    }, refetch] = useAxios({
    url: 'http://localhost:3000/api/v1/price',
    method: 'POST',
    data: [
      ...tokenList
    ]
  })

  useEffect(() => {
  }, [])

  const dataList = {
    type: 'node',
    name: 'boss',
    value: 0,
    children: [
      {
        type: 'node',
        name: 'Team Dataviz',
        value: 0,
        children: [
          { type: 'leaf', name: 'Mark', value: 90 },
          { type: 'leaf', name: 'Robert', value: 12 },
          { type: 'leaf', name: 'Emily', value: 34 },
          { type: 'leaf', name: 'Marion', value: 53 },
          { type: 'leaf', name: 'Nicolas', value: 98 },
          { type: 'leaf', name: 'Malki', value: 22 },
          { type: 'leaf', name: 'Djé', value: 12 },
          { type: 'leaf', name: 'Mélanie', value: 45 },
          { type: 'leaf', name: 'Einstein', value: 76 }
        ]
      }
    ]
  }

  return (
    <TreeMap
      data={dataList}
      width={1200}
      height={800}
    />
  )
}

export default AIAgentPage
