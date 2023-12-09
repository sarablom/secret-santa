"use client";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

type Props = {
	$imgUrl?: StaticImageData | null;
	dispalyIcon?: boolean;
};

export const AvatarWrapper = styled.div<Props>`
	display: grid;
	place-content: center;
	position: relative;
	width: 68px;
	height: 68px;
	border-radius: 50%;
	border: 6px solid #fff;
	margin: 32px 8px 8px;
	background: ${props =>
		props.$imgUrl ? `url(${props.$imgUrl.src})` : "#008a52"};
	color: #fff;
	box-sizing: content-box;
`;

export const StyledStatusIndicator = styled(Image)`
	position: absolute;
	bottom: -4px;
	right: -8px;
	width: 24px;
	height: 24px;
	box-sizing: content-box;
	border-radius: 50%;
`;

export const SantaHatImage = styled(Image)`
	position: absolute;
	top: -28px;
	right: -24px;
	width: 66.81px;
	height: auto;
	box-sizing: content-box;
`;

export const NoImagePlaceHolder = styled.span`
	font-size: 48px;
`;
