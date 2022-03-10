import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PlantAccordion({
  water,
  sunlight,
  humidity,
  temperature,
  fertilizer,
  medium,
  repot,
}) {
  return (
    <div className="accordion">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Water</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{water}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sunlight</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{sunlight}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Humidity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{humidity}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Temperature</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{temperature}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Fertilizer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{fertilizer}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Medium</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{medium}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Repot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{repot}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
