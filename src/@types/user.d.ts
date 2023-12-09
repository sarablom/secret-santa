type User = {
  id: string;
	firstName: string;
	lastName: string;
	imgUrl: string;
	status: "occupied" | "unknown" | "available" | "";
	displayIcon: boolean;
	displaySantaHat: boolean;
  email: string;
};
