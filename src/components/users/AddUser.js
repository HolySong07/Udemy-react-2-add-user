import style from "../UI/Button.module.css"
import Button from "../UI/Button";


const AddUser = (props) => {
	const SendForm = (e) => {
		e.preventDefault();
		console.log(213);
	}

	return (
		<form onSubmit={SendForm}>
			<label htmlFor="username" > User name</label>
			<input id="username" type="text"/>

			<label htmlFor="age" >Age (Years)</label>
			<input id="age" type="number"/>

			<Button type="submit">Add User </Button>
		</form>
	)
}

export default AddUser