"use client";
import CategoryFilter from "./CategoryFilter";
import { useState, useMemo } from "react";
import { ALL_CATEGORIES_LABEL } from "@/lib/constants";
import { LockOpenIcon, LockClosedIcon } from "@heroicons/react/24/solid";

interface VideosProps {
	videos: Video[];
}

export default function Videos({ videos }: VideosProps) {
	const [selectedCategory, setSelectedCategory] =
		useState(ALL_CATEGORIES_LABEL);

	const uniqueCategories = useMemo(() => {
		const allCategories = videos.map((video) => video.category);
		return Array.from(new Set(allCategories));
	}, [videos]);

	const filteredVideos =
		selectedCategory === ALL_CATEGORIES_LABEL
			? videos
			: videos.filter((video) => video.category === selectedCategory);

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<div className="flex items-center justify-between space-x-4">
				<CategoryFilter
					uniqueCategories={uniqueCategories}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>

				<LockOpenIcon className="h-8 w-8 text-pinkCust" />
			</div>
			<div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				{filteredVideos.map((video) => (
					<div key={video._id} className="group relative">
						<div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
							<video controls className="object-cover object-center">
								<source src={video.videoUrl} type="video/mp4" />
								Votre navigateur ne prend pas en charge le lecteur vidéo.
							</video>
							{video.access !== "free" && (
								<LockClosedIcon
									className="absolute h-full w-full object-cover object-center text-pinkCust"
									aria-hidden="true"
								/>
							)}
						</div>
						<div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-pinkCust">
							<h3>{video.title}</h3>
							<p>{video.length}</p>
						</div>
						<p className="mt-1 text-sm">{video.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
