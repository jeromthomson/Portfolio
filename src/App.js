import './App.css';
import { Box, Stack, } from '@mui/system';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
function App() {
  return (
    <Box>
    <Typography variant="h5" sx={{height:'5vh',width:'100hw', marginTop:'50%',textAlign:'center'}}>
     Hello World ;)
    </Typography>
    <Typography variant="h4" sx={{height:'5vh',width:'100hw', textAlign:'center'}}>
     Jerom Pulikottil
    </Typography>   
    <Typography variant="h6" sx={{marginTop:'5%', height:'5vh',width:'100hw', textAlign:'center'}}>
     Software Engineer | Tech Enthusiast
    </Typography>
    <Typography variant="h5" sx={{marginTop:'15%', height:'5vh',width:'100hw', textAlign:'center'}}>
     About Me
     <Divider></Divider>
    </Typography>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'15%',marginRight:'15%',height:'40vh'}}>
    <img src={require('./photo.jpg')} height='85%' width='100%'  ></img> 
    <Stack sx={{marginTop:'4%'}} justifyContent={'space-around'} direction={'row'} >
    <GitHubIcon onClick={event =>  window.location.href='https://github.com/jeromthomson'}></GitHubIcon> 
    <DraftsIcon onClick={event =>  window.location.href='mailto:jtpulikotttil@mun.ca'}></DraftsIcon>
    <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/jerom-pulikottil/'}></LinkedInIcon>
    </Stack>   
    </Paper>
    <Divider></Divider>
    <Paper  elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',flex:'auto'}}>
    <Box>

    <Typography variant="h6" sx={{marginTop:'15%',paddingTop:'8%',paddingLeft:'8%', height:'5vh',width:'100hw',}}>
     Hi ;)     
    </Typography>
    <Typography variant="body1" sx={{paddingLeft:'2%',paddingRight:'2%', textAlign:'center'}}>
     I am an Academic Term 6 student at Memorial University of Newfoundland, currently pursuing my Bachelors degree in computer
     engineering, actively seeking a 4 month co-op oppurtunity for winter 2023.
    </Typography>
    <Typography variant="body1" sx={{paddingLeft:'2%',paddingRight:'2%', textAlign:'center'}}>
    What you see here is my Portfolio website completely made from scracth using React and Material UI.
    </Typography>
    <Typography variant="body1" sx={{paddingLeft:'2%',paddingRight:'2%', textAlign:'center'}}>
    If you like my work please dont hesitate to contact me, I look forward to hearing from you
    </Typography>
    </Box>
    </Paper>
    <Typography variant="h5" sx={{marginTop:'15%', height:'5vh',width:'100hw', textAlign:'center'}}>
     Experience
     <Divider></Divider>
    </Typography>
    <Timeline  sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
      <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
          Sep 2021 Aug 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Beaufort Solutions
          </Typography>
          <Typography>
            Software Engineer
          </Typography>
          <Typography>
            St. John's, NL
          </Typography>
          <Typography>●	Engineered automated Problem Order Reports, using Azure timer functions and ASP.NET decreasing error detection time by 600% i.e., from 7 days to 30 minutes</Typography>
          <Typography>●	Restructured and streamlined the existing payment gateway using GLOBAL PAYMENTS, which increased privacy, improved user experience and decreased developer overhead</Typography>
          <Typography>●	Analyzed industry leading SAS products to give recommendations to senior management which facilitated with smooth upgrades to existing company technologies</Typography>
          <Typography>●	Developed backend REST based microservices using C# and .NET web API</Typography>
          <Typography>●	Assisted with the development of frontend components of an E-Commerce platform using JavaScript, Razor Pages and .NET MVC</Typography>
        </TimelineContent>
        
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        Sep 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           Hatcher Commons 
          </Typography>
          <Typography>
            Desk Staff
          </Typography>
          <Typography>
            St. John's, NL
          </Typography>
          <Typography>●	Supervised the Hatcher Commons Lab and helped students with basic general and technical difficulties such as: Microsoft Office help, printing issues, campus card reloads and campus card reprints</Typography>
          <Typography>●	Helped maintain a calm and respectful environment for students by resolving complaints received via an anonymous complaint registration system</Typography>
          <Typography>●	Facilitated Check-In/Check-Out of students living on campus.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <Typography variant="h5" sx={{marginTop:'15%', height:'5vh',width:'100hw', textAlign:'center'}}>
     Projects
     <Divider></Divider>
    </Typography>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',minheight:'40vh'}}>
    <Stack  spacing={2}>
    <img src={require('./MUNTour.jpg')} width={'100%'} height={'85%'} ></img>  
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>MUNTour</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ●	Led a team of 5 developers to build an interactive web application using React for a class project. The project aimed to create an application capable of booking Stays, Flights, and Car Rentals. 
          </Typography>
          <Typography>
          ●	Successfully integrated our frontend application with our algorithms team using Firebase, allowing users to browse through a rich catalog of Stays, Flights, and Car Rentals with varying prices across various locations.
          </Typography>
          <Typography>
          ●	Integrated our payments team's solution using Stripe to accept and process customer credit card data in a sandbox environment to avoid unnecessary charges.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
    </Paper>
    
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',minheight:'40vh'}}>
    <Stack spacing={2} >
    <img src={require('./PrinterQueue.jpg')} width={'100%'} height={'85%'} ></img>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Printer Queue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ●	A simple project made using Intel Altera Cyclone V DE10 FPGA board to demonstrate a printer queue. Employed double dabble algorithm to convert the switch inputs to human readable outputs and used the buttons inputs to move to the next stage of the printing job.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
    </Paper>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',minheight:'40vh'}}>
    <Stack spacing={2} >
    <img src={require('./SimplyFyle.jpg')} width={'100%'} height={'85%'} ></img>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>SimplyFyle</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ●	SimplyFyle is a humble GUI made to help students automate their file organization during their academic semesters. Coded in Python using Tkinter. SimplyFyle automatically sorts specific course-related files into their course folders and deliverables subfolders.
          </Typography>
        </AccordionDetails>
        </Accordion>
    </Stack>
    </Paper>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',minheight:'40vh'}}>
    <Stack spacing={2} >
    <img src={require('./MorseCode.jpg')} width={'100%'} height={'85%'} ></img>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Morse Code Translator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ●	A project made using Arduino Uno Rev3 capable of encrypting and decrypting Morse Code using Python and button switches as inputs and a LED display as an output.
          </Typography>
        </AccordionDetails>
        </Accordion>
    </Stack>
    </Paper>
    </Box>
  );
}
export default App;
