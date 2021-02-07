import React from "react";

import Header from "./components/Header";
import Container from "./components/Container"
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <Container>
      </Container>
    </div>
  );
};


// function App() {
//   const [state, setState] = useState(null)

//   // useEffect(() => {
//   //   async function getData () {
//   //     const url = "https://randomuser.me/api/?results=250&nat=us";

//   //     const users = await fetch(url).then(response => {
//   //       return response
//   //     });

//   //     setState(users)
//   //     console.log(users)
//   //   }
//   //   getData()m
//   // }, []);

//   useEffect(() => {
//     API.getUsers().then((results) => {
//       setState(results.data.results);
//       //console.log(results.data.results);
//     });
//   }, []);

//   console.log(state);
//   return (
//     <div className="App">
//       <h1>Employees</h1>
//       <ul>
//         {state.map((user) => (
//           <li>{`${user.name.first} ${user.name.last}`}</li>
//         ))}

//       </ul>
//     </div>
//   );
// }

export default App;
