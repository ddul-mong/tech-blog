import { getAllPosts } from "@/entities/post/model/post";
import PostsPage from "@/page/posts";
import type { ReactElement } from "react";

export default async function Home(): Promise<ReactElement> {
	const posts = await getAllPosts();

	return (
		<main>
			<PostsPage posts={posts} />
		</main>
	);
}
