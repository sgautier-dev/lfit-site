export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
}

export function getRecaptchaVerificationUrl(token: string): string {
	const params = new URLSearchParams();
	params.append("secret", process.env.RECAPTCHA_SECRET_KEY!);
	params.append("response", token);

	return `https://www.google.com/recaptcha/api/siteverify?${params.toString()}`;
}

export const formatDateToFrench = (dateString: Date) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
};
