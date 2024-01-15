'use server';

export async function searchCallFromID(id: string) {
	const fetcher = async () => {
		const resp = fetch(
			`http://alb-dx-go-backend-1319772537.sa-east-1.elb.amazonaws.com/api/v1/gtw/82aa7efd-5ce8-4840-83ec-60beb5e004c0/r/calls/${id}`
		).then((res) => {
			const response = res.json();
			return response;
		});
		return resp;
	};
	const response = await fetcher();
	return response;
}
