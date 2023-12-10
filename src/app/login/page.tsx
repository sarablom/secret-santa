"use client";
import { useState } from "react";

import { CustomTextInput } from "../../components/CustomTextInput";

export default function Home() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	return (
		<main>
			<h1>Secret Santa</h1>

			<div
				style={{
					width: "min(661px, 90%)",
					display: "flex",
					flexDirection: "column",
					gap: "32px",
				}}
			>
				<CustomTextInput
					value={name}
					onChange={setName}
					id="user-name"
					label="name"
					type="text"
				/>

				<CustomTextInput
					value={password}
					onChange={setPassword}
					id="password"
					label="password"
					type="password"
				/>

				<CustomTextInput
					value={email}
					onChange={setEmail}
					id="email"
					label="email"
					type="email"
				/>
			</div>
		</main>
	);
}
