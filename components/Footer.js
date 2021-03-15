import React from 'react';
import Link from 'next/link';

import { constants } from '../config/constants';

import {translations} from "../translations";

import './Footer.less';

export default function Footer({lang}) {
    const [year] = React.useState(new Date().getFullYear());
    const [companyName] = React.useState(constants.COMPANY_NAME);

    return (
        <div className="footer-container">
            <div className="footer-container--inner">
                <ul>
                    <li className="footer-container--inner-item">© {year} {companyName}</li>
                    <li className="footer-container--inner-item"><Link href="/privacy" as="/privacy"><a>{translations.GLOBAL.footer.privacy[lang]}</a></Link></li>
                    <li className="footer-container--inner-item"><Link href="/terms-account" as="/terms-account"><a>{translations.GLOBAL.footer.tos[lang]}</a></Link></li>
                    <li className="footer-container--inner-item"><Link href="/terms" as="/terms"><a>{translations.GLOBAL.footer.toc[lang]}</a></Link></li>
                    <li className="footer-container--inner-item"><Link href="/impressum" as="/impressum"><a>{translations.GLOBAL.footer.imprint[lang]}</a></Link></li>
                </ul>
            </div>
        </div>
    )
}
