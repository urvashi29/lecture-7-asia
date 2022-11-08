import React from "react";
import { Parallax, Background } from "react-parallax";
import { useSelector } from "react-redux";
import DisplayEVCharts from "../component/DisplayEVCharts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const About = () => {
  const evData = useSelector(state => state.evData);

  return (
    <>
      <div style={styles}>

        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>


      </div>
      <div style={{ textAlign: "center" }}>
        <h2>EV Sales data</h2>
        <DisplayEVCharts evData={evData} />

        {/* iterate if there are multiple Accordion e.g FAQ */}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )

}

export default About;


//https://codesandbox.io/s/r0yekozrw?from-embed