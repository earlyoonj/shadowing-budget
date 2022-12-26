import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation'

export default function ShadowingBudget() {
    const { t, lang } = useTranslation('common');

    return (
        <>
            <Head>
                <title>Shadowing Budget</title>
                <meta
                    name="description"
                    content="Budget planner and expense tracker"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}
