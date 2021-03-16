import React from 'react';
import Link from 'next/link';

import { constants } from '../config/constants';


import './Footer.less';

export default function Footer({lang}) {
    const [year] = React.useState(new Date().getFullYear());
    const [companyName] = React.useState(constants.COMPANY_NAME);

    return (
        <div className="footer-container">
            <div className="footer-container--inner">
                <ul>
                    <li className="footer-container--inner-item">© {year} {companyName}</li>
                    <li className="footer-container--inner-item"><Link href="/privacy" as="/privacy"><a>FooterItem</a></Link></li>
                    <li className="footer-container--inner-item"><Link href="/terms-account" as="/terms-account"><a>FooterItem</a></Link></li>
                    <li className="footer-container--inner-item"><Link href="/terms" as="/terms"><a>FooterItem</a></Link></li>
                    <li className="footer-container--inner-item"><Link href="/impressum" as="/impressum"><a>FooterItem</a></Link></li>
                </ul>
            </div>
        </div>
    )
}
