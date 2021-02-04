import React from 'react';

import I18nRegistry from '../interfaces/I18nRegistry';

// @ts-ignore
import style from './SponsorshipWidget.css';

interface SponsorshipWidgetProps {
    registrationKey?: string;
    i18nRegistry: I18nRegistry;
}

const SponsorshipWidget: React.FC<SponsorshipWidgetProps> = ({ i18nRegistry, registrationKey }) => {
    // TODO: Verify registration key
    if (registrationKey) return null;

    return (
        <div className={style.sponsorshipWidget}>
            <svg width="178" height="181" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 181">
                <path
                    d="M0 180.017h37.287L71.35 52.898H34.061zM48.717 0l-9.083 33.898h36.675L85.392 0z"
                    fill="#b9b7b3"
                />
                <defs>
                    <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="84.788"
                        y1="116.678"
                        x2="177.799"
                        y2="116.678"
                    >
                        <stop offset="0" stopColor="#287aac" />
                        <stop offset="1" stopColor="#54aada" />
                    </linearGradient>
                </defs>
                <path d="M140.51 53.119H92.788l-8 28.306h47.691l-28.03 98.813h39.287l34.063-127.119z" fill="url(#a)" />
            </svg>
            <span>{i18nRegistry.translate('Shel.Neos.Terminal:Main:sponsorship')}</span>
        </div>
    );
};

export default React.memo(SponsorshipWidget);
