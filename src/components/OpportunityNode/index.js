import React from 'react'
import { RadialChart } from 'react-vis'

export const OpportunityNode = ({node}) => (
    <RadialChart
    className={'donut-chart-example'}
    innerRadius={15}
    radius={node.radius}
    getAngle={d => d.theta}
    data={[
        {theta: 2, className: 'custom-class'},
        {theta: 6},
        {theta: 2},
        {theta: 3},
        {theta: 1}
    ]}
    width={60}
    height={60} />
);

export default OpportunityNode;
