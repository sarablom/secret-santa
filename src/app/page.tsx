import { Avatar } from "../components/Avatar";
import { users } from "../data/users";

export default function Home() {
	return (
		<main>
			<h1>Secret Santa</h1>
			{users.map(user => (
				<Avatar key={user.id} displayIcon={false} user={user} />
			))}
		</main>
	);
}
