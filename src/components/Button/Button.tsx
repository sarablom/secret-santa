import { ReactNode } from "react";
import { StyledButton } from "./styles";

import { Kalam } from "next/font/google";
const kalam = Kalam({ weight: "700", subsets: ["latin-ext"] });

type Props = {
	children: ReactNode;
	onClick: () => void;
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
};

export const Button = ({
	children,
	onClick,
	type = "button",
	disabled,
}: Props) => {
	return (
		<StyledButton
			type={type}
			className={kalam.className}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
};
