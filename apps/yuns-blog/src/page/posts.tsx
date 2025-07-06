import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { PostCard } from "@/entities/post/ui/post/post-card";
import { cn } from "@/shared/utils/cn";

type PostsPageProps = {
	posts: PostWithFrontmatterType[];
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
	return (
		<main className={cn("md:max-w-3xl md:mx-auto")}>
			<ul className={cn("list-none p-0")}>
				{posts.map((post) => (
					<PostCard key={post.title} post={post} />
				))}
			</ul>
		</main>
	);
};

export default PostsPage;
