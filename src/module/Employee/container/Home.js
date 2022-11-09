import React from 'react';
import PropTypes from 'prop-types';
import Employee from '../component/Employee';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabComponent from '../component/TabComponent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} centered onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Employee />
            </TabPanel>
            <TabPanel value={value} index={1}>
               <TabComponent />
            </TabPanel>
        </div>
    );
};


export default Home;