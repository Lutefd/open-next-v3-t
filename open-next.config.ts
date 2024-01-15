import type { BuildOptions } from 'open-next/types/open-next';

const config = {
	default: {
		override: {
			wrapper: 'aws-lambda-streaming',
		},
	},
	functions: {},
};
module.exports = config;
export type OpenNextConfig = typeof config;
