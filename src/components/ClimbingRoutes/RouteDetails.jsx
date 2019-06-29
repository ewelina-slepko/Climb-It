import React from 'react';

const RouteDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <h1>Nazwa drogi - {id}</h1>
            <h3>Wycena</h3>
            <h4>Data</h4>
            <p> Description adgsfg sgsfg sfgsf hsfh sfh fs</p>
        </div>
    )
}

export default RouteDetails;
