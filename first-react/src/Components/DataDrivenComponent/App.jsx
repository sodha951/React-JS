import Header from "./Header"
import Entry from "./Entry"
import data from "../../../data"

export default function App() {
  const journalData = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        entry={entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
        {journalData}
      </main>
    </>
  )
}

