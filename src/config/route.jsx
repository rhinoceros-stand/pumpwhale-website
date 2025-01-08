import AIAgent from '../pages/heatmap/AIAgent'

const route = [
  {
    path: 'HeatMap',
    children: [
      {
        path: 'AIAgent',
        element: <AIAgent />
      }
    ]
  }
]

export default route
