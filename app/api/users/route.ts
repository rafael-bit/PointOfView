import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function GET() {
	try {
		const activeUsers = await prisma.user.findMany({
			where: {
				column: true,
			},
		});
		return NextResponse.json(activeUsers);
	} catch (error) {
		return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
	}
}