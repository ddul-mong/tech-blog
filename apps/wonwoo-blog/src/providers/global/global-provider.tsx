"use client";

import Header from "@/components/header/header";
import type React from "react";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default GlobalProvider;
