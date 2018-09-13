import { compose } from 'recompose'
import addProps from '../../utils/recompose/addProps'

const fill = ({ nodeType }) => {
    if(nodeType==='opportunity') return '#6fa5fc'
    else if (nodeType==='skill') return '#0c2b4e'
    else if (nodeType==='moment') return '#fcdb45'
    else return '#e07188'
}

const radius = ({ nodeType }) => {
    if(nodeType==='opportunity') return 35
    else if (nodeType==='skill') return 30
    else if (nodeType==='moment') return 25
    else return 25
}

export default compose(
    addProps({
        fill,
        radius,
    })
)