import { cn } from "@/utils/cn";
import Link from "next/link";

//TODO:
// 네비게이션 색상 전환 애니메이션
// 네비게이션 클릭 시 페이지 이동 or 스크롤 이동
const Header = () => {
	return (
		<header className="w-full h-16 bg-[#f8bb6bc0]">
			<nav
				className={cn(
					"w-full h-full flex justify-end items-center px-6 gap-x-4",
				)}
			>
				<ScrollLink />
				<Link
					href="/posts"
					className="bg-white rounded-full px-4 py-1 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
				>
					Blog
				</Link>
			</nav>
		</header>
	);
};

const ScrollLink = () => {
	return (
		<ul className="flex items-center gap-4">
			<li>About me</li>
			<li>Experience</li>
			<li>Skills</li>
			<li>Portfolio</li>
			<li>Contact</li>
		</ul>
	);
};

export default Header;
