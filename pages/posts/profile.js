import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function Profile() {
    return (
        <Layout>
            <Head>
                <title>Profile</title>
            </Head>
            <Script
                src='https://connect.facebook.net/en_US/sdk.js'
                // strategy='lazyOnload'
                onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
            />
            <h1>Hi, I am Hai</h1>
        </Layout>
    );
}
