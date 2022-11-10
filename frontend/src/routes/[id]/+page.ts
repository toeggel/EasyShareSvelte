import type { PageLoad } from './$types';
import type { SharedContent } from '$lib/_generated-api';

export const load: PageLoad = async ({ fetch, params }) => {
    const res = await fetch(`https://127.0.0.1:7200/shared-contents/${ params.id }`);
    return await res.json() as SharedContent;
};
