import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface User {
	id: string;
	name: string | null;
	email: string | null;
	image: string | null;
}

export default function UsersPage() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('/api/users');
			const data = await response.json();
			setUsers(data);
		};

		fetchUsers();
	}, []);

	return (
		<div className='mt-10'>
			<h3 className='text-xl mt-5 font-semibold'>Columnist</h3>
			<ul className="flex flex-wrap items-center gap-7 mt-2">
				{users.map((user) => (
					<li key={user.id} className="flex mt-4">
						<Link href={`/columnist/${user.id}`}>
							{user.image && <img src={user.image} alt={`${user.name}'s avatar`} className='rounded-full w-20 h-20 object-cover' />}
							<p>{user.name}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}