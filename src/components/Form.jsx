import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({createMeeting}) => {

    // Meeting state
    const [meeting, updateMeeting] = useState({
        name: '',
        subject: '',
        host: '',
        date: '',
        time: '',
    });

    // Error state
    const [error, updateError] = useState(false);

    // Change detection for inputs, update state
    const updateState = event => {
        updateMeeting({
            ...meeting,
            [event.target.name]: event.target.value,
        })
    }

    const submitData = event => {
        event.preventDefault();

        // Validate data submited
        if(name.trim().length === 0 || subject.trim().length === 0 || 
            date.trim().length === 0 || date.trim().length === 0) {
          // Update error state
            updateError(true);
            return;
        }

        // Update error state
        updateError(false);

        // Generate unique id
        meeting.id = uuidv4();

        // Create meeting
        createMeeting(meeting);

        // Reset Form
        updateMeeting({
            name: '',
            subject: '',
            host: '',
            date: '',
            time: '',
        })
    }

    const {name, subject, host, date, time,} = meeting;

    return ( 
        <Fragment>
            <h4>Create Meeting</h4>
            <form onSubmit={submitData}>
                <label>Meeting name</label>
                <input type="text"
                     name="name"
                     className="u-full-width"
                     placeholder="Meeting name"
                     onChange={updateState}
                     value={name}
              />

                <label>Meeting subject</label>
                <textarea className="u-full-width"
                        name="subject"
                        placeholder="What's the meeting about?"
                        onChange={updateState}
                        value={subject}
              >
              </textarea>

                <label>Meeting host</label>
                <input type="text"
                     name="host"
                     className="u-full-width"
                     placeholder="Meeting host email"
                     onChange={updateState}
                     value={host}
              />

                <label>Date</label>
                <input type="date"
                     name="date"
                     className="u-full-width"
                     onChange={updateState}
                     value={date}
              />

                <label>Time</label>
                <input type="time"
                     name="time"
                     className="u-full-width"
                     onChange={updateState}
                     value={time}
              />

                { error ? 
                    <p className="alert-error">All fields are required</p>
                    :
                    null
                }       

                <button type="submit"
                      className="u-full-width button-success"
              >
                  Create Meeting +
              </button>
            </form>
        </Fragment>
     );
}
 
Form.propTypes = {
    createMeeting: PropTypes.func.isRequired,
}

export default Form;