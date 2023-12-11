import { StaticImageData } from "next/image";
import { allImages } from "../components/Avatar";

export type User = {
	id?: string;
	name: string;
	imgUrl: StaticImageData | null;
	status: "occupied" | "unknown" | "available" | "";
	displayIcon: boolean;
	displaySantaHat: boolean;
	email: string;
  password?: string;
};

export const users: User[] = [
	{
		id: "gdaggavvv",
		name: "Wade Warren",
		email: "wade.warren@example.com",
		imgUrl: allImages.avatar03,
		status: "available",
		displayIcon: true,
		displaySantaHat: true,
	},
	{
		id: "pgdgmgad",
		name: "Marvin McKinney",
		email: "marvin.mckinney@example.com",
		imgUrl: allImages.avatar02,
		status: "occupied",
		displayIcon: true,
		displaySantaHat: false,
	},
	{
		id: "pgägbbadvv",
		name: "Jenny Wilson",
		email: "jenny.wilson@example.com",
		imgUrl: null,
		status: "unknown",
		displayIcon: false,
		displaySantaHat: true,
	},
	{
		id: "pgägbbadvv",
		name: "Bessie Cooper",
		email: "bessie.cooper@example.com",
		imgUrl: allImages.avatar01,
		status: "",
		displayIcon: false,
		displaySantaHat: true,
	},
];
