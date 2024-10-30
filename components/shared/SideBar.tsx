"use client";

import { FaRegNewspaper } from "react-icons/fa6";
import { FaMicrophone, FaRegLightbulb } from "react-icons/fa";
import { useState } from "react";

const SidebarNavigation: React.FC = () => {
	const [selectedSection, setSelectedSection] = useState("notices");

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
	};

	return (
		<div className="flex">
			<aside className="flex flex-col justify-between items-center bg-gray-800 w-40 text-white gap-5">
				<div className="w-full py-4 outline-none flex flex-col items-center gap-2"></div>
				<button onClick={() => handleSectionChange("notices")} className="w-full py-4 hover:bg-gray-700 outline-none flex flex-col items-center gap-2">
					<FaRegNewspaper size={40} />
					Notices	
				</button>
				<button onClick={() => handleSectionChange("voices")} className="w-full py-4 hover:bg-gray-700 outline-none flex flex-col items-center gap-2">
					<FaMicrophone size={40}/>
					Voices
				</button>
				<button onClick={() => handleSectionChange("about")} className="w-full py-4 hover:bg-gray-700 outline-none flex flex-col items-center gap-2">
					<FaRegLightbulb size={40}/>
					About
				</button>
				<button onClick={() => handleSectionChange("contact")} className="w-full py-4 hover:bg-gray-700 outline-none flex flex-col items-center gap-2">
					<FaRegLightbulb size={40} />
					Contact
				</button>
				<div className="w-full py-4 outline-none flex flex-col items-center gap-2"></div>
			</aside>

			<main className="flex-1 p-10">
				{selectedSection === "notices" && (
					<div>
						<h2 className="text-2xl font-bold">Content for Section 1</h2>
						<p>Details and information for Section 1 go here.</p>
					</div>
				)}
				{selectedSection === "voices" && (
					<div>
						<h2 className="text-2xl font-bold">Content for Section 2</h2>
						<p>Details and information for Section 2 go here.</p>
					</div>
				)}
				{selectedSection === "about" && (
					<div>
						<h2 className="text-2xl font-bold">Content for Section 3</h2>
						<p>Details and information for Section 3 go here.</p>
					</div>
				)}
			</main>
		</div>
	);
};

export default SidebarNavigation;