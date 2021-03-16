import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useWindowSize from '../helpers/use-window-size';

import './Header.less';

export default function Header({lang}) {
    const [openMenu, setOpenMenu] = React.useState(Boolean(false));
    const [showLogo, setShowLogo] = React.useState(Boolean(true));
    const mobileMenuWidth = 1000;
    const size = useWindowSize();

    const [currentLang, setCurrentLang] = React.useState('de');
    React.useEffect(() => {
        const { href } = window.location;
        if (href) {
            const splitHref = window.location.href.split('/');
            if (splitHref.length >= 4) {
                setCurrentLang(window.location.href.split('/')[3]);
            } else {
                setCurrentLang('de');
            }
        }
    }, []);

    const languageChanged = (langSelector) => {
        const { origin } = window.location;
        window.location.href = `${origin}/${langSelector.currentTarget.value}`;
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const onScroll = (e) => {
        const { scrollY } = e.currentTarget;
        if (scrollY > 45) {
            setShowLogo(false);
        } else {
            setShowLogo(true);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className={`header-container ${openMenu ? 'open-menu' : ''}`}>
            <div className="header-container--inner">
                <ul>
                    {showLogo || size.width >= mobileMenuWidth ? (<li className="header-container--inner-logo"><Link href={`/${lang}/`}><a><Image src="/v2/relax-tax.at-wort-bildmarke-trademark.jpg" alt="RelaxTax | Steuerausgleich per App in Österreich" height="35" width="230" /></a></Link></li>) : null}
                    <li className="header-container--inner-item"><Link href={lang === 'de' ? '/de/wieso-relax-tax/' : lang === 'en' ? '/en/why-relax-tax/' : '/wieso-relax-tax/'}><a>MenuItem</a></Link></li>
                    <li className="header-container--inner-item"><Link href={lang === 'de' ? '/de/so-funktionierts/' : lang === 'en' ? '/en/how-it-works/' : '/so-funktionierts/'}><a>MenuItem</a></Link></li>
                    <li className="header-container--inner-item">
                        <select value={currentLang} name="" id="" onChange={(value) => languageChanged(value)}>
                            <option value="de">DE</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                    <li className="header-container--inner-menu" onMouseDown={() => toggleMenu()}>
                        <div className="header-container--inner-menu-container">
                            <div className={`header-container--inner-menu-container-burger ${openMenu ? 'animate' : ''}`} />
                        </div>
                    </li>
                </ul>
                {openMenu ? (
                    <ul>
                        <li className="header-container--inner-item mobile"><Link href={lang === 'de' ? '/de/wieso-relax-tax/' : lang === 'en' ? '/en/why-relax-tax/' : '/wieso-relax-tax/'}><a>MenuItem</a></Link></li>
                        <li className="header-container--inner-item mobile"><Link href={lang === 'de' ? '/de/so-funktionierts/' : lang === 'en' ? '/en/how-it-works/' : '/so-funktionierts/'}><a>MenuItem</a></Link></li>
                        <li className="header-container--inner-item mobile"><Link href={lang === 'de' ? '/de/kosten/' : lang === 'en' ? '/en/pricing/' : '/kosten/'}><a>MenuItem</a></Link></li>
                        <li className="header-container--inner-item mobile">
                            <select value={currentLang} name="" id="" onChange={(value) => languageChanged(value)}>
                                <option value="de">DE</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                    </ul>
                ) : null}
            </div>

        </div>
    )
}
