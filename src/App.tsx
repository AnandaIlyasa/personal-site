import React from 'react';
import './App.css';
import { Box, IconButton, Tooltip, createTheme, Grid, Tabs, ThemeProvider, ToggleButton, Typography } from '@mui/material';
import { Home } from './Tabs/Home';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { MessingAround } from './Tabs/MessingAround';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { SeriousProject } from './Tabs/SeriousProject';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'black',
          height: 3
        },
        root: {
          height: '40px',
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: 'black',
          borderWidth: 3,
          width: '200px',
          textTransform: 'capitalize'
        }
      }
    }
  }
});

function App() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderPanel = (value: string) => {
    if (value === 'messing') {
      return (<MessingAround />)
    } else if (value === 'serious') {
      return (<SeriousProject />)
    } else {
      return (<Home />)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box padding={4} border={3} borderRadius={2} bgcolor='#3F4E4F' height='90vh'>
        <Box position='absolute' width={80} height={20} top={8} left='47%' borderRadius='10%'>
          <Box position='absolute' bgcolor='lightgray' border={7} borderColor='black' width={5} height={5} top='5%' left='25%' borderRadius='50%'></Box>
          <Box position='absolute' bgcolor='lightgray' width={5} height={5} top='38%' left='65%' borderRadius='50%'></Box>
        </Box>
        <Box boxShadow={5} height='99%' border={4} padding={0.1} borderRadius={2} bgcolor='whitesmoke'>
          <Grid container direction='row' borderBottom={3} alignItems='center'>
            <Grid item xs={10}>
              <Tabs
                value={value}
                onChange={handleChange}
              >
                <ToggleButton value="home">
                  <Typography pl={1} align='left' color='black' fontWeight='bold' width='100%'>home...</Typography>
                </ToggleButton>
                <ToggleButton value="serious">
                  <Typography pl={1} align='left' color='black' fontWeight='bold' width='100%'>serious project...</Typography>
                </ToggleButton>
                <ToggleButton value="messing">
                  <Typography pl={1} align='left' color='black' fontWeight='bold' width='100%'>messing around...</Typography>
                </ToggleButton>
                <Box paddingTop={1.5} marginLeft={1}>
                  <AddOutlinedIcon />
                </Box>
              </Tabs>
            </Grid>
            <Grid item spacing={2} paddingY={0.5} paddingRight={2} xs={2} textAlign='right'>
              <MinimizeIcon fontSize='large' />
              <Box display='inline-block' width='20px' bgcolor='red' />
              <CropSquareOutlinedIcon fontSize='large' />
              <Box display='inline-block' width='20px' bgcolor='red' />
              <CloseIcon fontSize='large' />
            </Grid>
          </Grid>
          <Grid container bgcolor='#222831' paddingRight={2} justifyContent='flex-end'>
            <Tooltip title="Whatsapp" arrow>
              <IconButton href='https://wa.me/6287863238629?text=I come from your website : ' target="_blank">
                <WhatsAppIcon htmlColor='white' />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email" arrow>
              <IconButton href='mailto:aip.ilyasa@gmail.com?subject=I come from your web' target="_blank">
                <MailOutlineIcon htmlColor='white' />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub" arrow>
              <IconButton href='https://github.com/AnandaIlyasa' target="_blank">
                <GitHubIcon htmlColor='white' />
              </IconButton>
            </Tooltip>
            <Tooltip title="Linkedin" arrow>
              <IconButton href='https://www.linkedin.com/in/ananda-ilyasa-putra-aba646208/' target="_blank">
                <LinkedInIcon htmlColor='white' />
              </IconButton>
            </Tooltip>
          </Grid>
          <br />
          <Grid
            container
            height='80%'
            direction="row"
            alignItems="stretch"
            justifyContent="center"
          >
            {
              renderPanel(value)
            }
          </Grid>
        </Box>
        <Typography position='absolute' fontSize='small' bottom={5} left='47.5%' variant='subtitle2' bgcolor='#3F4E4F' color='lightgray' fontWeight='bold' align='center'>MekBook Aer</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
