'use client';

import { Desc, Hero, ToViewLive, Subtitle, Title, ToRepo, Role, Page as Image } from "./elements";
import { IconCode, IconDatabase, IconMail, IconRocket, IconShield, IconSparkles } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Page = () => {

    const { t } = useTranslation("global");

    const roles: { icon: React.ElementType, title: string, desc: string }[] = [
        { icon: IconSparkles, title: t('pages.products.mymech.roles.branding.title'), desc: t('pages.products.mymech.roles.branding.description') },
        { icon: IconCode, title: t('pages.products.mymech.roles.development.title'), desc: t('pages.products.mymech.roles.development.description') },
        { icon: IconDatabase, title: t('pages.products.mymech.roles.storage.title'), desc: t('pages.products.mymech.roles.storage.description') },
        { icon: IconShield, title: t('pages.products.mymech.roles.security.title'), desc: t('pages.products.mymech.roles.security.description') },
        { icon: IconMail, title: t('pages.products.mymech.roles.messaging.title'), desc: t('pages.products.mymech.roles.messaging.description') },
        { icon: IconRocket, title: t('pages.products.mymech.roles.deploy.title'), desc: t('pages.products.mymech.roles.deploy.description') },
    ]

    const images: { src: string, alt: string }[] = [
        { src: '/imgs/products/mymech/1.png', alt: t('pages.products.mymech.images.1.alt') },
        { src: '/imgs/products/mymech/2.png', alt: t('pages.products.mymech.images.2.alt') },
        { src: '/imgs/products/mymech/3.png', alt: t('pages.products.mymech.images.3.alt') },
        { src: '/imgs/products/mymech/4.png', alt: t('pages.products.mymech.images.4.alt') },
        { src: '/imgs/products/mymech/5.png', alt: t('pages.products.mymech.images.5.alt') },
    ]

    return (
        <>
            <Hero
                src="/imgs/products/mymech/hero.png"
                alt={t('pages.products.mymech.images.hero.alt')}
            />
            <header className="flex flex-col gap-6">
                <Title id="product-title">{t('pages.products.mymech.title')}</Title>
                <Subtitle>{t('pages.products.mymech.subtitle')}</Subtitle>
                <Desc id="product-desc">{t('pages.products.mymech.description')}</Desc>
            </header>
            <nav aria-label={t('pages.products.mymech.navAriaLabel')}>
                <ul className="flex items-center gap-6 insm:flex-col">
                    <li><ToViewLive href='https://mymech-frontend.vercel.app/' /></li>
                </ul>
            </nav>
            <ul
                aria-label={t('pages.products.mymech.roles.ulAriaLabel')}
                className="grid grid-cols-2 gap-6 insm:grid-cols-1"
            >
                {roles.map((role, key) => (
                    <Role
                        key={key}
                        icon={role.icon}
                        title={role.title}
                        desc={role.desc}
                    />
                ))}
            </ul>
            <ul
                aria-label={t('pages.products.mymech.images.ulAriaLabel')}
                className="flex flex-col gap-3"
            >
                {images.map((img, key) => (
                    <li key={key}>
                        <Image src={img.src} alt={img.alt} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Page;