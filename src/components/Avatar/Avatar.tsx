import React from "react";
import { AvatarWrapper, StyledStatusIndicator } from "./styles";
import occupied from "../../../public/images/minus.svg";
import available from "../../../public/images/check.svg";

type Props = {
	status?: "occupied" | "unknown" | "available";
};

export const Avatar = ({ status }: Props) => {
	return (
		<AvatarWrapper>
			{status && <StyledStatusIndicator
				src={status === "occupied" ? occupied : available}
				alt={status}
			/>}
		</AvatarWrapper>
	);
};
