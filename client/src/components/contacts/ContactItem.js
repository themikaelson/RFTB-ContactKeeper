import React, { useContext } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact, style }) => {
	const contactContext = useContext(ContactContext);

	const { deleteContact, setCurrent, clearCurrent } = contactContext;

	const { _id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	return (
		<div style={style} className="card bg-light">
			<h3 className="text-primary text-left">
				{name}{" "}
				<span
					style={{ float: "right" }}
					className={
						"badge " +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{_.upperFirst(type)}
				</span>
			</h3>
			<ul className="list">
				{email && (
					<li>
						<i className="fas fa-envelope-open"></i> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className="fas fa-phone"></i> {phone}
					</li>
				)}
			</ul>
			<p className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>
				Edit
			</p>
			<p className="btn btn-danger btn-sm" onClick={onDelete}>
				Delete
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
