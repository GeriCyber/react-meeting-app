import React from 'react';
import PropTypes from 'prop-types';

const Meeting = ({meeting, deleteMeeting}) => (
    <div className="meeting">
        <p>Meeting:&nbsp;
            <span>
                {meeting.name}
            </span>
        </p>
        <p>Subject:&nbsp;
            <span>
                {meeting.subject}
            </span>
        </p>
        <p>Host:&nbsp; 
            <span>
                {meeting.host}
            </span>
        </p>
        <p>Date:&nbsp; 
            <span>
                {meeting.date}
            </span>
        </p>
        <p>Time:&nbsp; 
            <span>
                {meeting.time}
            </span>
        </p>
        <button className="delete button u-full-width"
                onClick={() => deleteMeeting(meeting.id)}
        >
            Delete &times;
        </button>
    </div>
);

Meeting.propTypes = {
    meeting: PropTypes.object.isRequired,
    deleteMeeting: PropTypes.func.isRequired,
}
 
export default Meeting;