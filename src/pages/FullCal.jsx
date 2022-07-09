import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import axios from "axios";

const FullCal = () => {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;
  console.log(apiKey);
  const [events, setEvents] = useState([]);

  const ev = () => {
    // alert("sdsd");
  };
  useEffect(() => {
    axios
      .get("/dummy/calendar_list.json")
      .then((res) => {
        setEvents(res.data.calendarList);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev next today",
          center: "title",
          end: "",
        }}
        titleFormat={{ year: "numeric", month: "short" }}
        height={"100vh"}
        width={"100vw"}
        googleCalendarApiKey={apiKey}
        //  { googleCalendarId: "skehdgus400@gmail.com" }
        events={events}
        eventClick={ev()}
        eventColor="#efb33f"
      />
    </>
  );
};

export default FullCal;
