import { AppProps } from 'next/app';
import '../tailwind.css';
import withHeader from '../components/Header/withHeader';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default withHeader(App);
