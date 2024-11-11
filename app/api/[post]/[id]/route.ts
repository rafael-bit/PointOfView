import prisma from "@/lib/prismadb"
import { NextResponse, NextRequest } from "next/server"
import { blogData } from "@/constants/blogData"

interface Params {
  id: string
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { id } = params

  try {
    const post = await prisma.blog.findUnique({
      where: { id },
      include: { user: true }
    })

    if (post) {
      return new NextResponse(JSON.stringify(post, null, 2), { status: 200 })
    }

    const blogPost = blogData.find((post) => post.id === id)

    if (blogPost) {
      return new NextResponse(JSON.stringify(blogPost, null, 2), { status: 200 })
    }

    return new NextResponse(JSON.stringify({ message: "Post not found" }, null, 2), { status: 404 })
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, null, 2),
      { status: 500 }
    )
  }
}