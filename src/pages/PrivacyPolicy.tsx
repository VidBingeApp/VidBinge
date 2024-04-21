import { useTranslation } from "react-i18next";

import { ThinContainer } from "@/components/layout/ThinContainer";
import { Heading1, Heading3, Paragraph } from "@/components/utils/Text";
import { PageTitle } from "@/pages/parts/util/PageTitle";

import { SubPageLayout } from "./layouts/SubPageLayout";

function PrivacyParagraph(props: { title: string; children: React.ReactNode }) {
  return (
    <>
      <p className="text-white mb-2 font-medium">{props.title}</p>
      <div className="text-type-text mb-8">{props.children}</div>
    </>
  );
}

export function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <SubPageLayout>
      <PageTitle subpage k="global.pages.privacy" />
      <ThinContainer>
        <Heading1>{t("privacy.title")}</Heading1>
        <Heading3>{t("privacy.lastUpdated")}</Heading3>
        <Paragraph>{t("privacy.description")}</Paragraph>
        <PrivacyParagraph title={t("privacy.p1.title")}>
          {t("privacy.p1.body")}
        </PrivacyParagraph>
        <PrivacyParagraph title={t("privacy.p2.title")}>
          {t("privacy.p2.body")}
        </PrivacyParagraph>
        <PrivacyParagraph title={t("privacy.p3.title")}>
          {t("privacy.p3.body")}
        </PrivacyParagraph>
        <PrivacyParagraph title={t("privacy.p4.title")}>
          {t("privacy.p4.body")}
        </PrivacyParagraph>
        <PrivacyParagraph title={t("privacy.p5.title")}>
          {t("privacy.p5.body")}
        </PrivacyParagraph>
        <PrivacyParagraph title={t("privacy.p6.title")}>
          {t("privacy.p6.body")}
        </PrivacyParagraph>
      </ThinContainer>
    </SubPageLayout>
  );
}
