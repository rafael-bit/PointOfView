"use client";

import { FaRegNewspaper } from "react-icons/fa6";
import { FaMicrophone, FaRegLightbulb } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Politics } from "@/constants/politcs";
import { Ideas } from "@/constants/ideas";
import clsx from "clsx";

const Sidebar: React.FC = () => {
	const [selectedSection, setSelectedSection] = useState("notices");
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolling(true);
			} else {
				setIsScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
	};


	return (
		<div className="flex flex-col sm:flex-row">
			<aside className={clsx("z-10 flex sm:flex-col justify-between items-center bg-gray-800 w-full sm:w-40 text-white gap-5 sm:gap-1 sm:h-full top-[4.5rem] sm:top-8", isScrolling ? "" : "fixed")}>
				<div className="w-full py-6 outline-none flex flex-col items-center gap-2"></div>

				<button
					onClick={() => handleSectionChange("notices")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300 ${selectedSection === "notices" ? "bg-gray-700" : ""}`}
				>
					<FaRegNewspaper size={40} className="hover:h-12 duration-300" />
					Notices
				</button>

				<button
					onClick={() => handleSectionChange("voices")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300 ${selectedSection === "voices" ? "bg-gray-700" : ""}`}
				>
					<FaMicrophone size={40} className="hover:h-12 duration-300" />
					Voices
				</button>

				<button
					onClick={() => handleSectionChange("about")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300 ${selectedSection === "about" ? "bg-gray-700" : ""}`}
				>
					<FaRegLightbulb size={40} className="hover:h-12 duration-300" />
					About
				</button>

				<button
					onClick={() => handleSectionChange("contact")}
					className={`w-full py-6 outline-none flex flex-col items-center hover:bg-gray-700 hover:duration-300 ${selectedSection === "contact" ? "bg-gray-700" : ""}`}
				>
					<FaRegLightbulb size={40} className="hover:h-12 duration-300" />
					Contact
				</button>

				<div className="w-full py-4 outline-none flex flex-col items-center gap-2"></div>
			</aside>

			<main className="flex-1 p-10 sm:px-52 mt-44 sm:mt-16 mb-16">
				{selectedSection === "notices" && (
					<div>
						<h2 className="text-3xl font-bold">Notices</h2>
						<div>
							<h3 className="text-xl mt-5 font-semibold">Discovery</h3>
							<div className="mt-5 flex gap-5 flex-wrap">
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Learn more</Link>
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Last notices</Link>
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Newsletters</Link>
								<Link href="" className="bg-gray-800 text-white hover:bg-gray-700 duration-500 px-5 py-2 rounded-full">Point of view journal</Link>
							</div>
							<hr className="mt-7" />
							<h3 className="text-xl mt-5 font-semibold">Politics</h3>
							<ul className="flex flex-wrap items-center gap-7 mt-2">
								{Politics.map((region) => (
									<li key={region.id} className="flex mt-4">
										<Link href={region.link} className="flex flex-col items-center">
											<img
												src={region.image}
												alt={`${region.name}`}
												className={`${region.width} ${region.height} rounded-full`}
											/>
											<span className="pt-5 gap-7">{region.name}</span>
										</Link>
									</li>
								))}
							</ul>
							<hr className="mt-7" />
							<h3 className="text-xl mt-5 font-semibold">Ideas and current affairs</h3>
							<ul className="flex flex-wrap items-center gap-10 mt-2">
								{Ideas.map((idea) => (
									<li key={idea.id} className="flex mt-4">
										<Link href={idea.link} className="flex flex-col items-center">
											<img
												src={idea.image}
												alt={idea.name}
												className={`${idea.width} ${idea.height} rounded-full`}
											/>
											<span className="pt-5 gap-7">{idea.name}</span>
										</Link>
									</li>
								))}
							</ul>
							<hr className="mt-7" />
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

export default Sidebar;