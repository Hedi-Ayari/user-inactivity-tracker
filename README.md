# User Inactivity Tracker

A library to perform actions after a user has been inactive for a specified amount of time.

## Installation

```bash
npm install user-inactivity-tracker
```
# Usage

## Importing and Using the Tracker
To use the UserInactivityTracker, import it into your project and create an instance by specifying the inactivity time and a callback function to handle the inactivity.

```bash
import UserInactivityTracker from 'user-inactivity-tracker';

const inactivityTime = 900000; // Time in milliseconds (e.g., 15 minutes)
const handleInactivity = () => {
  console.log('User has been inactive for 15 minutes.');
  // Perform actions like logging out the user, showing a warning, etc.
};

const tracker = new UserInactivityTracker(inactivityTime, handleInactivity);
tracker.startTracking();

// To stop tracking (e.g., when the component unmounts)
tracker.stopTracking();
```
# Exemple 

Here is an example of how to use the UserInactivityTracker in a React component:

```bash
import React, { useEffect } from 'react';
import UserInactivityTracker from 'user-inactivity-tracker';

const MyComponent = () => {
  useEffect(() => {
    const inactivityTime = 900000; // 15 minutes in milliseconds

    const handleInactivity = () => {
      console.log('User has been inactive for 15 minutes.');
      // Perform any desired action here
    };

    const tracker = new UserInactivityTracker(inactivityTime, handleInactivity);
    tracker.startTracking();

    // Clean up the tracker on component unmount
    return () => tracker.stopTracking();
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;

```