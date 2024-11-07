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
		<div>
			<ul className="flex flex-wrap items-center gap-7 mt-2">
				{users.map((user) => (
					<li key={user.id} className="flex mt-4">
						<Link href={`/column/${user.id}`}>
							{user.image && <img src={user.image} alt={`${user.name}'s avatar`} className='rounded-full w-20 h-20 object-cover' />}
							<p>{user.name}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}