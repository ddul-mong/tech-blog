import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactElement } from "react";

export const MdxLink = (
	props: AnchorHTMLAttributes<HTMLAnchorElement>,
): ReactElement | null => {
	const { href, ...rest } = props;
	if (!href) return null;
	const isAnchorLink = href.startsWith("#");

	if (isAnchorLink) {
		return (
			<a
				aria-label={props["aria-label"]}
				title={href.replace("#", "")}
				href={href}
				{...rest}
			/>
		);
	}
	return (
		<Link
			href={href}
			className={cn(props.className)}
			target={props.target}
			title={props.title}
			rel={props.rel}
		>
			{props.children}
		</Link>
	);
};
