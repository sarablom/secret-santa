"use client";
import styled from "styled-components";

export const CustomStyledInputWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const StyledLabel = styled.label`
	position: absolute;
	top: 25px;
	left: 32px;
	text-transform: uppercase;
	font-size: 32px;
	transition: all 0.3s ease;

	&.focused {
		top: 6px;
		font-size: 16px;
	}
`;

export const StyledTextInput = styled.input`
	height: 100px;
	width: 100%;
	border: none;
	padding: 32px;
	font-size: 32px;

	&:focus {
		border: none;
		outline: 2px solid black;
		outline-offset: -4px;
	}

	&:invalid {
		background: var(--color-error);
	}
`;

export const PasswordVisabilytButton = styled.button`
	position: absolute;
	right: 16px;
	top: 25px;
	border: none;
	background: transparent;
	height: 44px;
	width: 44px;
	padding: 0;
	cursor: pointer;
`;
