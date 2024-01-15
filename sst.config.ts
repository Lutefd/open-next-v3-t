import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { OpenNextCdkReferenceImplementation } from './cdkReference';

export default {
	config(_input) {
		return {
			name: 'test',
			region: 'us-east-1',
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new OpenNextCdkReferenceImplementation(stack, 'site', {
				openNextPath: '.open-next',
			});

			if (app.stage !== 'prod') {
				app.setDefaultRemovalPolicy('destroy');
			}
			stack.addOutputs({
				SiteUrl: site.distribution.distributionDomainName,
			});
		});
	},
} satisfies SSTConfig;
