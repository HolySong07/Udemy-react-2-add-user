
const UsersLisr = (props) => {
	return (
		<ul>
			{props.users.map((item) => (
				<li key={item.id}>{item.name} ({item.age} years old)</li>
			) )}
		</ul>
	)
}

export default UsersLisr