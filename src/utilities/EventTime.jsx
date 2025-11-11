const EventTime = (time24) => {
  const date = new Date(`1970-01-01T${time24}:00`);
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return formattedTime;
}

export default EventTime;