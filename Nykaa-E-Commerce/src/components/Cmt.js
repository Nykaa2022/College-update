import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <div style={{width:"100%",alignContent:"center"}}>
      <Paper sx={{ position: '', top:50,bottom:0, left: 0,right:0 }} elevation={3}>
        <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List>
      </Box>
      </Paper>
    </div>
  );
}

const messageExamples = [
  {
    primary: 'jessy',
    secondary: "I'll be in the wedding this week. recommended one👍",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Preethi',
    secondary: `Fabric fells too good😊`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Sneha',
    secondary: 'I am try out this new dress🤳, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Nadia',
    secondary: 'Yes! I am the satisfied.😉',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: 'Maria',
    secondary: 'its ok nice product👏.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'jasmine',
    secondary: `thank you loving it💖`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Kirthi',
    secondary: `Summer Costume feel good to go😎.`,
    person: '/static/images/avatar/1.jpg',
  },
];
