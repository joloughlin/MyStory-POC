import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import enhance from './enhance'
 
const CustomNode = ({ id, node, fill, radius, nodeType,  ...props}) => (
    <g id={node.id}>
        <circle
            r= {radius}
            opacity= {1}
            stroke= {'#FFF'}
            strokeWidth= {1.5}
            fill={fill}
            {...props}
        />
        <text x={props.cx} y={props.cy} text-anchor='middle' fill='white' stroke-width='0.75px' class='label'>{nodeType}</text>
    </g>
)

CustomNode.propTypes = {
    node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        radius: PropTypes.number,
    }).isRequired,
    nodeType: PropTypes.string, 
    cx: PropTypes.number, 
    cy: PropTypes.number, 
    r: PropTypes.number,
    labelStyle: PropTypes.object, 
    label: PropTypes.string, 
    zoomable: PropTypes.boolean, 
}

export default enhance(CustomNode);