"use client";
import { useState } from "react";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { LoginFormWrapper } from "./styles";
import { Button } from "../../../../components/Button";

export const LoginForm = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	return (
		<LoginFormWrapper onSubmit={e => e.preventDefault()}>
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
			<Button onClick={() => {}}>Submit</Button>
		</LoginFormWrapper>
	);
};

