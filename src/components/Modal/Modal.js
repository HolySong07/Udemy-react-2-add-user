import "./Modal.css"


function Modal(props) {


	function deleteModal() {
		props.stateModal(false);
	}

	return (
		<div className="backdrop" onClick={deleteModal}>
			<div className="modal">
				<div className="header">
					<h2>{props.title}</h2>
				</div>
				<div className="content">
					{props.text}
					<button onClick={deleteModal} className="actions">Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default Modal