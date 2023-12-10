import { ReactNode } from "react";
import { StyledButton } from "./styles";

import { Kalam } from "next/font/google";
const kalam = Kalam({ weight: "700", subsets: ["latin-ext"] });

type Props = {
	children: ReactNode;
	onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
	return (
		<StyledButton className={kalam.className} onClick={onClick}>
			{children}
		</StyledButton>
	);
};
