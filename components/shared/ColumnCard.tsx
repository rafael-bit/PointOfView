import Overlay from "../ui/Overlay";
import Link from "next/link";
import { PostTypes } from "@/types/postTypes";

const ColumnCard: React.FC<{ post: PostTypes }> = ({
	post,
}) => {
	return (
		<article className="flex flew-wrap">
			<div className="bg-gray-800 rounded-2xl w-1/3">
				<Link
					href={`/blog/${post.id}`}	
				>
					<h3 className="text-lg font-bold text-gray-50 hover:underline py-12 px-12">
						{post.title}
					</h3>
				</Link>
			</div>
		</article>
	);
};

export default ColumnCard;
