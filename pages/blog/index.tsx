import { useEffect } from 'react';
import Router from 'next/router';

import { mostRecentPostURL } from '../../utils/post';

export default function BlogPage() {
    useEffect(() => {
        Router.push(mostRecentPostURL);
    }, []);
    return <p className="m-auto">Redirecting to most recent post...</p>;
}
