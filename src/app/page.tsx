'use client';
import Header from '@/components/Header/Header';
import MainPageWrapper from './page.styles';

export default function Home() {
    return (
        <MainPageWrapper>
            <div className="page">
                <Header />
            </div>
        </MainPageWrapper>
    );
}
