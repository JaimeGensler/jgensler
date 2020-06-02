import { AppProps } from 'next/app';
import '../tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
