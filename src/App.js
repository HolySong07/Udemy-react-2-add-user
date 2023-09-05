import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import Card from './components/UI/Card';
import style from "./components/UI/Card.module.css"
import UsersList from './components/users/UsersList';


function App() {
	const userArr = [];

	const [allusers, setallusers] = useState(userArr);


	
	function UsersFunction(userName, userAge) {
		setallusers((prevAllusers) => {
			return [...prevAllusers, {
				name: userName,
				age: userAge,
				id: Math.random()
			}]
		});
	}


  return (
    <div>
		<Card className={style.input}>
			<AddUser users={UsersFunction} />
		</Card>

		<Card className={style.input}>
			<UsersList users={allusers}/>
		</Card>
    </div>
  );
}

export default App;
