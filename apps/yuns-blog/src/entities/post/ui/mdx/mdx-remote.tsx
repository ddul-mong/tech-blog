import { cn } from "@/shared/utils/cn";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import { MDXComponents } from "./mdx-components";

interface MdxRemoteProps {
	source: string;
}

export const MdxRemote: React.FC<MdxRemoteProps> = ({ source }) => {
	return (
		<article className={cn("prose md:max-w-3xl max-w-full")}>
			<MDXRemote
				source={source}
				components={MDXComponents}
				options={{
					parseFrontmatter: true,
					mdxOptions: {
						remarkPlugins: [remarkBreaks],
						rehypePlugins: [
							rehypeSlug,
							[
								rehypeAutolinkHeadings,
								{
									properties: {
										className: ["subheading-anchor"],
										ariaLabel: "Link to section",
									},
								},
							],
							[
								rehypePrettyCode,
								{
									theme: "nord",
									//@ts-expect-error
									onVisitLine(node) {
										if (node.children.length === 0) {
											node.children = [{ type: "text", value: " " }];
										}
									},
									//@ts-expect-error
									onVisitHighlightedLine(node) {
										node.properties.className.push("line--highlighted");
									},
									//@ts-expect-error
									onVisitHighlightedWord(node) {
										node.properties.className = ["word--highlighted"];
									},
								},
							],
						],
					},
				}}
			/>
		</article>
	);
};
