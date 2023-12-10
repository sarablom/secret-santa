"use client";
import { ChangeEvent, useState } from "react";
import {
	StyledTextInput,
	StyledLabel,
	CustomStyledInputWrapper,
	PasswordVisabilytButton,
} from "./styles";

import eyeOpened from "../../../public/images/eyeOpened.svg";
import eyeClosed from "../../../public/images/eyeClosed.svg";

import { Kalam } from "next/font/google";
const kalam = Kalam({ weight: "700", subsets: ["latin-ext"] });

type Props = {
	label: string;
	type: "text" | "password" | "email" | "url" | "number";
	value: string;
	onChange: (value: string) => void;
	id: string;
};

export const CustomTextInput = ({
	label,
	type,
	value,
	onChange,
	id,
}: Props) => {
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState(type);

	const updateValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	const passwordVisibiltyHandler = () => {
		if (showPassword) {
			setShowPassword(false);
			setInputType("password");
		} else {
			setShowPassword(true);
			setInputType("text");
		}
	};

	return (
		<CustomStyledInputWrapper className={kalam.className}>
			<StyledLabel htmlFor={id} className={isFocused || value ? "focused" : ""}>
				{label}
			</StyledLabel>
			<StyledTextInput
				id={id}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				type={inputType}
				value={value}
				onChange={updateValueHandler}
			/>
			{type === "password" && (
				<PasswordVisabilytButton onClick={passwordVisibiltyHandler}>
					{showPassword ? (
						<img src={eyeOpened.src} alt="Hide password" />
					) : (
						<img src={eyeClosed.src} alt="Show password" />
					)}
				</PasswordVisabilytButton>
			)}
		</CustomStyledInputWrapper>
	);
};
