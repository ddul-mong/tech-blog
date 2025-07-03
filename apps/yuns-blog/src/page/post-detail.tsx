import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
import { PostDetailTitle } from "@/entities/post/ui/post/post-detail-title";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
	post: PostWithFrontmatterType;
};

import type { ReactElement } from "react";

export default function PostDetailPage({ post }: PostPageProps): ReactElement {
	return (
		<section className={cn("md:max-w-3xl")}>
			<PostDetailTitle>{post.title}</PostDetailTitle>
			<MdxRemote source={post.content} />
		</section>
	);
}
