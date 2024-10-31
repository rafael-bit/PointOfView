"use client";

import { FaRegNewspaper } from "react-icons/fa6";
import { FaMicrophone, FaRegLightbulb } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const SidebarNavigation: React.FC = () => {
	const [selectedSection, setSelectedSection] = useState("notices");

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
	};

	return (
		<div className="flex">
			<aside className="flex flex-col justify-between items-center bg-gray-800 w-40 text-white gap-1">
				<div className="w-full py-6 outline-none flex flex-col items-center gap-2"></div>

				<button
					onClick={() => handleSectionChange("notices")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300  ${selectedSection === "notices" ? "bg-gray-700" : ""
						}`}
				>
					<FaRegNewspaper size={40} className="hover:h-12 duration-300" />
					Notices
				</button>

				<button
					onClick={() => handleSectionChange("voices")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300  ${selectedSection === "voices" ? "bg-gray-700" : ""
						}`}
				>
					<FaMicrophone size={40} className="hover:h-12 duration-300" />
					Voices
				</button>

				<button
					onClick={() => handleSectionChange("about")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300  ${selectedSection === "about" ? "bg-gray-700" : ""
						}`}
				>
					<FaRegLightbulb size={40} className="hover:h-12 duration-300" />
					About
				</button>

				<button
					onClick={() => handleSectionChange("contact")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300  ${selectedSection === "contact" ? "bg-gray-700" : ""
						}`}
				>
					<FaRegLightbulb size={40} className="hover:h-12 duration-300" />
					Contact
				</button>

				<div className="w-full py-4 outline-none flex flex-col items-center gap-2"></div>
			</aside>

			<main className="flex-1 p-10">
				{selectedSection === "notices" && (
					<div>
						<h2 className="text-3xl font-bold">Notices</h2>
						<div>
							<h3 className="text-xl mt-5 font-semibold">Discovery</h3>
							<div className="mt-5 flex gap-5 mb-5">
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Learn more</Link>
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Last notices</Link>
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Newsletters</Link>
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Point of view journal</Link>
							</div>
							<hr />
							<h3 className="text-xl mt-5 font-semibold">Politics</h3>
							
							<div className=""></div>
						</div>
					</div>
				)}
				{selectedSection === "voices" && (
					<div>
						<h2 className="text-3xl font-bold">Voices</h2>
						<p>Details and information for Section 2 go here.</p>
					</div>
				)}
				{selectedSection === "about" && (
					<div>
						<h2 className="text-3xl font-bold">About</h2>
						<p>Details and information for Section 3 go here.</p>
					</div>
				)}
				{selectedSection === "contact" && (
					<div>
						<h2 className="text-3xl font-bold">Contact</h2>
						<p>Details and information for Section 3 go here.</p>
					</div>
				)}
			</main>
		</div>
	);
};

export default SidebarNavigation;	