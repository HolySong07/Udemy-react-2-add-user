
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";


const AddUser = (props) => {
	const [user, setUser] = useState("");
	const [age, setAge] = useState("");


	const [modal, setmodal] = useState("");
	



	const NameChange = (e) => {
		setUser(e.target.value);
	//	console.log(e.target.value);
	}

	const AgeChange = (e) => {
		setAge(e.target.value);
	//	console.log(e.target.value);
	}

	function modalState(st) {
		setmodal(st);
	}

	const SendForm = (e) => {
		e.preventDefault();
		 if (user.trim().length > 1 && age > 9) {
			console.log(user, age);
			props.users(user, age);
			setUser("");
			setAge("");
		}  else if ( user.trim().length === 0 || age === 0) {
			setmodal({
				title: "Invalid input",
				message: "Please enter invalid name and age"
			});
		} else if ( +age < 9) {
			setmodal({
				title: "Invalid age",
				message: "Please enter  age > 9"
			});
		}
	}

	return (
		<form onSubmit={SendForm}>
			<label htmlFor="username" > User name</label>
			<input onChange={NameChange}  value={user}  id="username" type="text"/>

			<label htmlFor="age" >Age (Years)</label>
			<input onChange={AgeChange} value={age} id="age" type="number"/>

			<Button type="submit">Add User </Button>
			{modal && <Modal title={modal.title} text={modal.message} stateModal={modalState}/> }
		</form>


	)
}

export default AddUser