"use client";

import { usePathname } from 'next/navigation';
import Header from './Header';
import SecondaryHeader from './SecondaryHeader';

const HeaderWrapper = () => {
    const pathname = usePathname();

    // Use the original cutout header only on the home page
    const isHomePage = pathname === '/';

    return isHomePage ? <Header /> : <SecondaryHeader />;
};

export default HeaderWrapper;
