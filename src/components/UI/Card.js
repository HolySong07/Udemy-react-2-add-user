import style from "./Card.module.css"

const Card = (props) => {

	const Myclass = style.card + " " + props.className;
	

	return (
		<div className={Myclass}>{props.children}</div>
	)
}

export default Card