import './App.css';
import { Box, Container, Stack, width } from '@mui/system';
import { Divider, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';
import Timeline from '@mui/lab/Timeline';
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
    <Typography variant="h5" sx={{marginTop:'5%', height:'5vh',width:'100hw', textAlign:'center'}}>
     Aspiring Software Engineer
    </Typography>
    <Typography variant="h5" sx={{marginTop:'15%', height:'5vh',width:'100hw', textAlign:'center'}}>
     About Me
     <Divider></Divider>
    </Typography>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'15%',marginRight:'15%',height:'40vh'}}>
    <img src="https://picsum.photos/200/300" width={'100%'} height={'85%'} ></img>
    <Stack sx={{marginTop:'4%'}} justifyContent={'space-around'} direction={'row'} >
    <GitHubIcon></GitHubIcon>
    <DraftsIcon></DraftsIcon>
    <LinkedInIcon></LinkedInIcon>
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
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',height:'40vh'}}>
    <img src="https://picsum.photos/200/300" width={'100%'} height={'85%'} ></img>
    <Stack sx={{marginTop:'4%'}} justifyContent={'space-around'} direction={'row'} >
    <Typography variant="body1" >
           MUNTour 
    </Typography>
    </Stack>
    </Paper>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',height:'40vh'}}>
    <img src="https://picsum.photos/200/300" width={'100%'} height={'85%'} ></img>
    <Stack sx={{marginTop:'4%'}} justifyContent={'space-around'} direction={'row'} >
    <Typography variant="body1" >
           Printer Queue
    </Typography>
    </Stack>
    </Paper>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',height:'40vh'}}>
    <img src="https://picsum.photos/200/300" width={'100%'} height={'85%'} ></img>
    <Stack sx={{marginTop:'4%'}} justifyContent={'space-around'} direction={'row'} >
    <Typography variant="body1" >
           SimplyFyle
    </Typography>
    </Stack>
    </Paper>
    <Paper elevation={15} sx={{marginTop:'5%',marginBottom:'10%',marginLeft:'8%',marginRight:'8%',height:'40vh'}}>
    <img src="https://picsum.photos/200/300" width={'100%'} height={'85%'} ></img>
    <Stack sx={{marginTop:'4%'}} justifyContent={'space-around'} direction={'row'} >
    <Typography variant="body1" >
           Morse Code translator
    </Typography>
    </Stack>
    </Paper>
    </Box>
  );
}
export default App;
