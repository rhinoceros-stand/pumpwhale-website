import { useMemo } from 'react'
import * as d3 from 'd3'

const Treemap = ({ width, height, data }) => {
  const colors = [
    '#dc2626',
    '#16a34a'
  ]

  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value)
  }, [data])

  // List of item of level 1 (just under root) & related color scale
  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name)
  var colorScale = d3
    .scaleOrdinal()
    .domain(firstLevelGroups || [])
    .range(colors)

  const root = useMemo(() => {
    const treeGenerator = d3.treemap().size([width, height]).padding(4)
    return treeGenerator(hierarchy)
  }, [hierarchy, width, height])

  const allShapes = root.leaves().map((leaf, i) => {
    const parentName = leaf.parent?.data.name
    return (
      <g key={leaf.id}>
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke='transparent'
          fill={colorScale(parentName)}
          className={'opacity-80 hover:opacity-100'}
        />
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 3}
          textAnchor='center'
          alignmentBaseline='hanging'
          fill='white'
          className='font-extrabold text-7xl'
        >
          {leaf.data.name}
        </text>
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 80}
          textAnchor='center'
          alignmentBaseline='hanging'
          fill='white'
          className='font-medium text-7xl'
        >
          {leaf.data.value}
        </text>
      </g>
    )
  })

  return (
    <div>
      <svg width={width} height={height}>
        {allShapes}
      </svg>
    </div>
  )
}

export default Treemap
