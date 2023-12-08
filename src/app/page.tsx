import { Avatar } from "../components/Avatar";

export default function Home() {
	return (
		<main>
			<h1>Secret santa</h1>
			<Avatar status="occupied" />
			<Avatar status="available" />
			<Avatar />
			<Avatar />
		</main>
	);
}
