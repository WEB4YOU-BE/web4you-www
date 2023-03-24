import {NextUIProvider} from '@nextui-org/react';
import Navbar from "../components/navbar";

export default function App({Component, pageProps}) {

    return <NextUIProvider>
        <Component {...pageProps} />
        <Navbar/>
    </NextUIProvider>
}
