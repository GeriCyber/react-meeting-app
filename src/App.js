import React, {Fragment, useState, useEffect} from 'react';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx'
import Meeting from './components/Meeting.jsx'

function App() {

  // Initial meetings
  let initialMeetings = JSON.parse(localStorage.getItem('meetings'));
  if (!initialMeetings) {
    initialMeetings = [];
  }

  // meetings array
  const [meetings, saveMeetings] = useState(initialMeetings);

  // Every time state changes update local storage with data from state
  useEffect(() => {
    if (initialMeetings) {
      localStorage.setItem('meetings', JSON.stringify(meetings));
    } else {
      localStorage.setItem('meetings', JSON.stringify([]));
    }
  }, [meetings, initialMeetings])

  // Save the created meeting in the meetings array
  // Update meetings array state
  const createMeeting = meeting => {
    saveMeetings([
      ...meetings,
      meeting
    ])
  }

  // Delete meeting by id
  const deleteMeeting = id => {
    const meetingsFiltered = meetings.filter(meeting => meeting.id !== id);
    saveMeetings(meetingsFiltered);
  }

  const title = meetings.length === 0 ? 'No meetings yet!' : 'Manage your Meetings';

  return (
    <Fragment>
      <h1><span className="title">Meeting Administration</span></h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createMeeting={createMeeting}
            />
          </div>
          <div className="one-half column">
          <h4>{title}</h4>
          <div className="meeting-container">
            {
              meetings.map(meeting => (
                <Meeting 
                  key={meeting.id} 
                  meeting={meeting}
                  deleteMeeting={deleteMeeting} />
              ))
            }
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
