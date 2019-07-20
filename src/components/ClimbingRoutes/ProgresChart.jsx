import React from 'react'
import Highcharts from 'highcharts'
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries } from 'react-jsx-highcharts'
import ReactHighcharts from 'react-highcharts';
import DarkUnica from 'highcharts/themes/dark-unica';

DarkUnica(ReactHighcharts.Highcharts);



const plotOptions = {

}

class ProgressChart extends React.Component {

    render() {
        return (
            <HighchartsChart
                highcharts={Highcharts}
                plotOptions={plotOptions}
            >
                <Chart />

                <Title>Climbing achievments</Title>

                <Legend />

                <XAxis categories={['IV', 'V', 'VI', 'VI.1', 'VI.2', 'VI.3', 'VI.4', 'VI.5']} />

                <YAxis>
                    <ColumnSeries name='amount of routes' data={[4, 3, 3, 9, 0, 2, 1, 1]} />
                </YAxis>
            </HighchartsChart>
        );
    }
}



export default withHighcharts(ProgressChart, Highcharts); 
