import React from "react";

import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin-ext"] });

import {
	AvatarWrapper,
	StyledStatusIndicator,
	SantaHatImage,
	NoImagePlaceHolder,
} from "./styles";

import occupied from "../../../public/images/minus.svg";
import available from "../../../public/images/check.svg";
import unknown from "../../../public/images/question.svg";
import santaHat from "../../../public/images/santa-hat.png";
import avatar01 from "/public/images/AVATAR-PLACEHOLDERS/avatar-01.png";
import avatar02 from "/public/images/AVATAR-PLACEHOLDERS/avatar-02.png";
import avatar03 from "/public/images/AVATAR-PLACEHOLDERS/avatar-03.png";
import avatar04 from "/public/images/AVATAR-PLACEHOLDERS/avatar-04.png";
import { User } from "../../data/users";

export const allImages = {
	avatar01,
	avatar02,
	avatar03,
	avatar04,
};

type Props = {
	user?: User;
	displayIcon?: boolean;
};

export const Avatar = ({ user, displayIcon = false }: Props) => {
	if (!user) {
		return <AvatarWrapper dispalyIcon={displayIcon} />;
	}

	const { status, displaySantaHat, imgUrl, name } = user;

	return (
		<AvatarWrapper className={bebas.className} $imgUrl={imgUrl}>
			{displaySantaHat && (
				<SantaHatImage src={santaHat} alt="Santa hat on avatar" />
			)}
			{status && (
				<StyledStatusIndicator
					src={
						status === "occupied"
							? occupied
							: status === "unknown"
							? unknown
							: status === "available"
							? available
							: ""
					}
					alt={`Online status: ${status}`}
				/>
			)}
			{!imgUrl && (
				<NoImagePlaceHolder>{name.charAt(0)}</NoImagePlaceHolder>
			)}
		</AvatarWrapper>
	);
};
