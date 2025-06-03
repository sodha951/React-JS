

export default function App() {

  const hours = new Date().getHours() % 12
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 23) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }
  return (
    <>
      <h1>It is currently {hours}</h1>
      <h1>Good {timeOfDay}</h1>
    </>
  )
}