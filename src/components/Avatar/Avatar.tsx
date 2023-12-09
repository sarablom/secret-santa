import React from "react";
import { AvatarWrapper, StyledStatusIndicator, SantaHatImage } from "./styles";

import occupied from "../../../public/images/minus.svg";
import available from "../../../public/images/check.svg";
import unknown from "../../../public/images/question.svg";
import santaHat from "../../../public/images/santa-hat.png";

type Props = {
	user: User;
};

export const Avatar = ({ user }: Props) => {
	const { status, displaySantaHat, imgUrl, firstName } = user;
  
	return (
		<AvatarWrapper>
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
							: available
					}
					alt={`Online status: ${status}`}
				/>
			)}
		</AvatarWrapper>
	);
};
