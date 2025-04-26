'use client';
import Header from '@/components/Header/Header';
import MainPageWrapper from './page.styles';
import BigDisplay from '@/components/BigDisplay/BigDisplay';

export default function Home() {
    return (
        <MainPageWrapper>
            <div className="page">
                <Header />
                <section className="body">
                    <BigDisplay />
                </section>
            </div>
        </MainPageWrapper>
    );
}
