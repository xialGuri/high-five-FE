import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const FullCal = () => {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;
  console.log(apiKey);
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: "skehdgus400@gmail.com",
        }}
      />
    </>
  );
};

export default FullCal;
