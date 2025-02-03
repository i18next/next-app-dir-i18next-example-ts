import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import Header from "./components/Header/Header"; // Ensure correct path
import {Footer} from "./components/Footer";

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const { t } = await useTranslation(lng);

  return (
    <>
      {/* Pass only currentLanguage, NOT changeLanguage */}
      <Header currentLanguage={lng} />
      <main>
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div style={{ width: "100%" }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t("blog.link")}>blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t("blog.link")}>
            <img
              style={{ width: "50%" }}
              alt="next 13 blog post"
              src="https://locize.com/blog/next-app-dir-i18n/next-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: "90%" }} />
        <div>
          <Link href={`/${lng}/second-page`}>
            <button type="button">{t("to-second-page")}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button">{t("to-client-page")}</button>
          </Link>
        </div>
      </main>
      <Footer lng={lng} />
    </>
  );
}
