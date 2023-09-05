import React from 'react';
import AddUser from './components/users/AddUser';
import Card from './components/UI/Card';
import style from "./components/UI/Card.module.css"


function App() {
  return (
    <div>
		<Card className={style.input}>
			<AddUser />
		</Card>
    </div>
  );
}

export default App;
