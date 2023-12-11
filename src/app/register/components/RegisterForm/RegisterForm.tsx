"use client";
import { FormEvent, useState } from "react";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { User } from "../../../../models/User";
import { RegisterFormWrapper } from "./styles";
import { Button } from "../../../../components/Button";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
	const [user, setUser] = useState<User>({
		name: "",
		password: "",
		email: "",
	});

	const router = useRouter();

	const handleSubmit = async () => {
		try {
			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/JSON",
				},
				body: JSON.stringify(user),
			});

			if (res.status === 200) router.push("/login");
		} catch {
			console.error("Could not create user");
		}
	};

	return (
		<RegisterFormWrapper onSubmit={e => e.preventDefault()}>
			<CustomTextInput
				value={user.name}
				onChange={value => setUser({ ...user, name: value })}
				id="register-user-name"
				label="Name"
				type="text"
			/>
			<CustomTextInput
				value={user.email || ""}
				onChange={value => setUser({ ...user, email: value })}
				id="register-email"
				label="Email"
				type="email"
			/>
			<CustomTextInput
				value={user.password || ""}
				onChange={value => setUser({ ...user, password: value })}
				id="register-password"
				label="Password"
				type="password"
			/>

			<Button
				disabled={!user.name || !user.password || !user.email}
				onClick={handleSubmit}
			>
				Submit
			</Button>
		</RegisterFormWrapper>
	);
};
