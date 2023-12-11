"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const RegisterMainWrapper = styled.main<{
	$backgroundImage: StaticImageData;
}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;
	min-width: 100%;
	background: ${props => `url(${props.$backgroundImage.src})`};
	background-size: cover;
	background-position: center;
	margin-bottom: 64px;
`;

export const RegisterHeading = styled.h1`
	font-size: 78px;
	color: #fff;

	span {
    display: inline-block;
    width: 74px;
    height: 5px;
    background: #fff;
    transform: translateY(-24px);
	}
`;

export const LoginLink = styled(Link)`
	color: black;
`;
