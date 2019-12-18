import React, {Component, useEffect} from 'react'
import 'react-sigma/sigma/sigma.plugins.dragNodes'


type Props = {
    sigma?: sigma
}

class DragNodes extends Component {

    constructor(props: Props){
        super(props)
        sigma.plugins.dragNodes(this.props.sigma, this.props.sigma.renderers[0])

    }

    render = () => null

    // useEffect(() => {
    //     if (props.sigma) {
    //         sigma.plugins.dragNodes(this.props.sigma, this.props.sigma.renderer[0])
    //     }
    // })
}

export default DragNodes;