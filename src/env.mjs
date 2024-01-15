// src/env.mjs
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	/*
	 * Serverside Environment variables, not available on the client.
	 * Will throw if you access these variables on the client.
	 */
	server: {
		// KEYCLOAK_ID: z.string().min(1),
		// KEYCLOAK_SECRET: z.string().min(1),
		// KEYCLOAK_ISSUER: z.string().min(1),
		AZURE_CLIENT_ID: z.string().min(1).default(''),
		AZURE_CLIENT_SECRET: z.string().min(1).default(''),
		AZURE_TENANT_ID: z.string().min(1).default(''),
		NEXTAUTH_URL: z.string().min(1).default(''),
		NEXTAUTH_SECRET: z.string().min(1).default(''),
		// END_SESSION_URL: z.string().min(1),
		// REFRESH_TOKEN_URL: z.string().min(1),
	},
	/*
	 * Environment variables available on the client (and server).
	 *
	 * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
	 */
	client: {},
	/*
	 * Due to how Next.js bundles environment variables on Edge and Client,
	 * we need to manually destructure them to make sure all are included in bundle.
	 *
	 * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
	 */
	runtimeEnv: {
		// KEYCLOAK_ID: process.env.KEYCLOAK_ID,
		// KEYCLOAK_SECRET: process.env.KEYCLOAK_SECRET,
		// KEYCLOAK_ISSUER: process.env.KEYCLOAK_ISSUER,
		AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
		AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET,
		AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		// END_SESSION_URL: process.env.END_SESSION_URL,
		// REFRESH_TOKEN_URL: process.env.REFRESH_TOKEN_URL,
	},
});
