import React from 'react'
import { storiesOf, action } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { ForceGraph, ForceGraphLink, ForceGraphNode, InteractiveForceGraph } from 'react-vis-force';
import { OpportunityNode } from '../src/components/OpportunityNode'
import { Sigma, RandomizeNodePositions, RelativeSize, NodeShapes } from 'react-sigma';
import CustomNode from '../src/components/CustomNode';


  
  const twoChildren = [
    <ForceGraphNode node={{ id: 'first-node' }}  />,
    <ForceGraphNode node={{ id: 'second-node' }} />,
    <ForceGraphLink link={{ source: 'first-node', target: 'second-node', value: 1 }} />,
  ]

  const labelStyle = {
    fontFamily: 'helvetica', 
    fontSize: 12,
  }

  const tenChildren = [
    <ForceGraphNode node={{ id: 'first-node', radius: 30 }} fill={'#6fa5fc'} labelStyle={labelStyle} />,
    <ForceGraphNode node={{ id: 'second-node', radius: 25 }} fill={'#e07188'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'third-node', radius: 30 }} fill={'#6fa5fc'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'fourth-node', radius: 20 }} fill={'#fcdb45'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'fifth-node', radius: 30 }}  fill={'#6fa5fc'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'sixth-node', radius: 20 }} fill={'#fcdb45'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'seventh-node', radius: 30 }}  fill={'#6fa5fc'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'eighth-node', radius: 20 }} fill={'#fcdb45'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'ninth-node', radius: 30 }} fill={'#6fa5fc'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'tenth-node', radius: 25 }} fill={'#e07188'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'eleventh-node', radius: 25 }} fill={'#e07188'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'twelfth-node', radius: 25 }} fill={'#e07188'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'thirteenth-node', radius: 28 }} fill={'#0c2b4e'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'fourteenth-node', radius: 28 }} fill={'#0c2b4e'} labelStyle={labelStyle}/>,
    <ForceGraphNode node={{ id: 'fifteenth-node', radius: 28 }} fill={'#0c2b4e'} labelStyle={labelStyle}/>,
    <ForceGraphLink link={{ source: 'first-node', target: 'second-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'third-node', target: 'second-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'third-node', target: 'fourth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fifth-node', target: 'fourth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fifth-node', target: 'fourth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'sixth-node', target: 'fourth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'seventh-node', target: 'fourth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'eighth-node', target: 'fourth-node', value: 2}} />,
    <ForceGraphLink link={{ source: 'ninth-node', target: 'tenth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'tenth-node', target: 'fifth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'eleventh-node', target: 'twelfth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fourteenth-node', target: 'first-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fifteenth-node', target: 'third-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'thirteenth-node', target: 'eleventh-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'thirteenth-node', target: 'fifth-node', value: 2 }} />,
  ]

  const customNodeChildren = [
    <CustomNode node={{ id: 'first-node', radius: 30, nodeType: 'opportunity' }} nodeType = {'opportunity'}  zoomable/>,
    <CustomNode node={{ id: 'second-node', radius: 25, nodeType: 'opportunity' }} nodeType = {'opportunity'}  zoomable/>,
    <CustomNode node={{ id: 'third-node', radius: 30, nodeType: 'opportunity' }} nodeType = {'opportunity'}  zoomable/>,
    <CustomNode node={{ id: 'fourth-node', radius: 20, nodeType: 'opportunity'}} nodeType = {'opportunity'}  zoomable />,
    <CustomNode node={{ id: 'fifth-node', radius: 30, nodeType: 'skill' }}  nodeType = {'skill'}  zoomable />,
    <CustomNode node={{ id: 'fifth-node', radius: 30, nodeType: 'skill' }}  nodeType = {'skill'}  zoomable />,
    <CustomNode node={{ id: 'sixth-node', radius: 20, nodeType: 'skill' }} nodeType = {'skill'}  zoomable/>,
    <CustomNode node={{ id: 'seventh-node', radius: 30, nodeType: 'skill' }} nodeType = {'skill'}  zoomable />,
    <CustomNode node={{ id: 'ninth-node', radius: 30, nodeType: 'moment'}} nodeType = {'moment'} zoomable/>,
    <CustomNode node={{ id: 'eighth-node', radius: 20, nodeType: 'skill' }} nodeType = {'skill'}  zoomable/>,
    <CustomNode node={{ id: 'tenth-node', radius: 25, nodeType: 'moment' }} nodeType = {'moment'}  zoomable/>,
    <CustomNode node={{ id: 'eleventh-node', radius: 25, nodeType: 'moment' }} nodeType = {'moment'}  zoomable/>,
    <CustomNode node={{ id: 'twelfth-node', radius: 25, nodeType: 'moment' }} nodeType = {'moment'}  zoomable/>,
    <CustomNode node={{ id: 'thirteenth-node', radius: 28, nodeType: 'goal'}} nodeType = {'goal'}  zoomable/>,
    <CustomNode node={{ id: 'fourteenth-node', radius: 28, nodeType: 'goal'}} nodeType = {'goal'}  zoomable/>,
    <CustomNode node={{ id: 'fifteenth-node', radius: 28, nodeType: 'skill' }} nodeType = {'skill'}  zoomable/>,
    <CustomNode node={{ id: '16-node', radius: 28, nodeType: 'skill' }} nodeType = {'skill'}  zoomable/>,
    <CustomNode node={{ id: '17-node', radius: 28, nodeType: 'skill' }} nodeType = {'skill'}  zoomable/>,
    <CustomNode node={{ id: '18-node', radius: 28, nodeType: 'moment' }} nodeType = {'moment'}  zoomable/>,
    <CustomNode node={{ id: '19-node', radius: 28, nodeType: 'moment' }} nodeType = {'moment'}  zoomable/>,
    <CustomNode node={{ id: '20-node', radius: 28, nodeType: 'goal' }} nodeType = {'goal'}  zoomable/>,
    <CustomNode node={{ id: '21-node', radius: 28, nodeType: 'goal' }} nodeType = {'goal'}  zoomable/>,
    <ForceGraphLink link={{ source: 'first-node', target: 'fifth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'second-node', target: 'sixth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'third-node', target: 'seventh-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fourth-node', target: 'eighth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fifth-node', target: 'ninth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'sixth-node', target: 'tenth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'seventh-node', target: 'eleventh-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'eighth-node', target: 'twelfth-node', value: 2}} />,
    <ForceGraphLink link={{ source: 'ninth-node', target: 'tenth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'tenth-node', target: 'fifth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'eleventh-node', target: 'twelfth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fourteenth-node', target: 'first-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'fifteenth-node', target: 'third-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'thirteenth-node', target: 'eleventh-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'thirteenth-node', target: 'fifth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: '16-node', target: 'first-node', value: 2 }} />,
    <ForceGraphLink link={{ source: '17-node', target: 'fourth-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'thirteenth-node', target: '18-node', value: 2 }} />,
    <ForceGraphLink link={{ source: 'sixth-node', target: '19-node', value: 2 }} />,
  ]

  const simpleGraph = {
      nodes: [{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}, {id: 'n3', label: 'Willy Wonka'}, {id: 'n4', label: 'Charlie'}], 
      edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}, {id: 'e2', source: 'n3', target: 'n4'}, {id: 'e3', source: 'n4', target: 'n2'}, {id: 'e4', source: 'n1', target: 'n3'}]
  }

storiesOf('ForceGraph', module)
    .add ('react-vis-force InteractiveForceGraph', () => { 
    return (<InteractiveForceGraph highlightDependencies simulationOptions={{ animate: true, strength: {charge: number('charge', 50)}}}>{tenChildren}</InteractiveForceGraph>)
    })
    .add ('react-vis-force InteractiveForceGraph with CustomNode', () => (
        <InteractiveForceGraph highlightDependencies zoom labelAttr='' simulationOptions={{ animate: true, strength: {charge: number('charge', 10)}}} >{customNodeChildren}</InteractiveForceGraph>
    )).add('react-sigma example', () => (
        <Sigma graph={simpleGraph} settings = {{drawEdges: true, }}>
            <RandomizeNodePositions/>
            <NodeShapes default="star" />
            <RelativeSize initialSize={15}/>
        </Sigma>
    ));
