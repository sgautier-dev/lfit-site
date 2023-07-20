import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ALL_CATEGORIES_LABEL } from "@/lib/constants";

type ItemFilterProps = {
	uniqueCategories: string[];
	selectedCategory: string;
	setSelectedCategory: (value: string) => void;
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function CategoryFilter({
	uniqueCategories,
	selectedCategory,
	setSelectedCategory,
}: ItemFilterProps) {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div className="border-b border-gray-400">
				<Menu.Button className="inline-flex w-full justify-center text-lg font-medium hover:text-gray-500 capitalize">
					{selectedCategory}
					<ChevronDownIcon
						className="-mr-1 ml-1 h-7 w-7 flex-shrink-0 text-gray-400 hover:text-gray-500"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item key={ALL_CATEGORIES_LABEL}>
							{({ active }) => (
								<button
									onClick={() => setSelectedCategory(ALL_CATEGORIES_LABEL)}
									className={classNames(
										active ? "bg-gray-100" : "",
										"w-full text-left block px-4 py-2 text-sm font-medium text-gray-900 capitalize"
									)}
								>
									{ALL_CATEGORIES_LABEL}
								</button>
							)}
						</Menu.Item>

						{uniqueCategories.map((item) => (
							<Menu.Item key={item}>
								{({ active }) => (
									<button
										onClick={() => {
											setSelectedCategory(item);
										}}
										className={classNames(
											active ? "bg-gray-100" : "",
											"w-full text-left block px-4 py-2 text-sm font-medium text-gray-900 capitalize"
										)}
									>
										{item}
									</button>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
