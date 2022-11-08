import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';
import { getEvData } from '../../actions';

class DispalyEVCharts extends Component {

    componentDidMount = () => {
        this.props.onGetEVData();
    }

    render() {
        return (
            <div style={{ width: "500px", height: "500px", marginLeft: "auto", marginRight: 'auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={this.props.evData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetEVData: () => dispatch(getEvData())
    }
}

export default connect(null, mapDispatchToProps)(DispalyEVCharts);