const envVarsToValidate = [
	"NEXT_PUBLIC_SANITY_PROJECT_ID",
	"NEXT_PUBLIC_SANITY_DATASET",
	"NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
	"RECAPTCHA_SECRET_KEY",
	"SMTP_HOST",
	"SMTP_PORT",
	"SMTP_USER",
	"SMTP_PASS",
	"NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
	"CLERK_SECRET_KEY",
	"NEXT_PUBLIC_CLERK_SIGN_IN_URL",
	"NEXT_PUBLIC_CLERK_SIGN_UP_URL",
	"NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL",
    "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL",
    "STRIPE_API_KEY",
    "NEXT_PUBLIC_SITE_URL",
    "STRIPE_WEBHOOK_SECRET",
	"STRIPE_PRICE_ID",
	"REVALIDATE_TOKEN",
	// ... any other variables to validate.
];

envVarsToValidate.forEach((variable) => {
	if (!process.env[variable]) {
		throw new Error(`Environment variable ${variable} is missing.`);
	}
});
