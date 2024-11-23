import { PropsWithChildren } from "react";

interface ICardProps extends PropsWithChildren {
	className?: string;
}

export const Card = ({ children, className }: ICardProps) => {
	return (
		<div className={`overflow-hidden rounded-lg shadow relative ${className}`}>
			<div className="px-4 py-5 sm:p-6">{children}</div>
		</div>
	);
};
