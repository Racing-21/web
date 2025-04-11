import { FC, PropsWithChildren } from "react";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-full max-w-7xl mx-auto flex flex-col gap-10 pt-6 px-2 md:px-4 xl:px-2">
			{children}
		</div>
	);
};
