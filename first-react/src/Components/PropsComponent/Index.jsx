

import Main from "./main"
import Joke from "./Joke";
import jokesData from "../../../jokesData";

// function Super() {

  // return (
  //   <>
  //     {/* <Main/> */}
      
  //     <main>
  //       <Joke 
  //         setup="I got my daughter a fridge for her birthday. Punchline: I can't wait to see her face light up when she opens it."
  //         punchline="I can't wait to see her face light up when she opens it."
  //         upvotes={10}
  //         isPun={true}
  //         comments={[
  //           {author: "", text: "", title:""},
  //           {author: "", text: "", title:""},
  //         ]}
  //       />
  //       <Joke 
  //         setup="How did the hacker escape the police? Punchline: He just ransomware!"
  //         punchline="Me just ransomware"
  //         isPun={true}
  //       />
  //       <Joke 
  //         setup="Why don't pirates travel on mountain roads? Punchline: Scurvy."
  //         punchline="Scurvy"
  //         isPun={true}
  //       />
  //       <Joke 
  //         setup=" Why do bees stay in the hive in the winter? Punchline: Swarm."
  //         punchline="Swarm"
  //         isPun={true}
  //       />
  //       <Joke 
  //         setup="What's the best thing about Switzerland? Punchline: I don't know, but the flag is a big plus!"
  //         punchline="I don't know, but the flag  is a big plus!"
  //         isPun={false}
  //       />
  //     </main>
      
  //   </>
  // )
// }

// export default Super;

// function Super () {
//   // const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
//   const ninjaTurtles = [
//       <h2>Donatello</h2>, 
//       <h2>Michaelangelo</h2>, 
//       <h2>Rafael</h2>,
//       <h2>Leonardo</h2>
//     ]
//   return (
//     <main>
//       {ninjaTurtles}  
//     </main>
//   )
// }

// export default Super;

export default function Super() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke  setup={joke.setup} punchline={joke.Punchline}/>
  })
  return (
    <main>
      {jokeElements}


    </main>
  )
}