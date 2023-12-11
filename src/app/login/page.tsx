import backgroundImage from "../../../public/images/bg__auth.svg";
import secretSantaLogo from "../../../public/images/logo__secret-santa.png";

import { LoginForm } from "./components/LoginForm/Loginform";
import { LoginHeading, LoginMainWrapper, NeedAccountLink } from "./styles";

import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin-ext"] });

export default function Login() {
	return (
		<LoginMainWrapper $backgroundImage={backgroundImage}>
			<img src={secretSantaLogo.src} alt="Secret Santa" />
			<LoginHeading className={bebas.className}>
				<span /> LOGIN <span />{" "}
			</LoginHeading>
			<LoginForm />
			<NeedAccountLink href="">Need an account?</NeedAccountLink>
		</LoginMainWrapper>
	);
}
