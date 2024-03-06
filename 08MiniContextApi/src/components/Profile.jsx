import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);
	console.log("user", user);

	if (!user?.username) {
		return <div>Please Login</div>;
	}

	return <div>Welcome! {user.username}</div>;
}

export default Profile;
