import backgroundImage from "../../../public/images/bg__auth.svg";
import secretSantaLogo from "../../../public/images/logo__secret-santa.png";

import { RegisterForm } from "./components/RegisterForm";
import { RegisterHeading, RegisterMainWrapper, LoginLink } from "./styles";

import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin-ext"] });

export default function Register() {
	return (
		<RegisterMainWrapper $backgroundImage={backgroundImage}>
			<img src={secretSantaLogo.src} alt="Secret Santa" />
			<RegisterHeading className={bebas.className}>
				<span /> REGISTER <span />{" "}
			</RegisterHeading>
			<RegisterForm />
			<LoginLink href="">Login</LoginLink>
		</RegisterMainWrapper>
	);
}
