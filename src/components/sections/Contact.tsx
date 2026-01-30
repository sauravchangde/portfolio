'use client';

import { Input, Label, Submit, Textarea } from "./elements/contact";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export const Contact = (props: React.HTMLAttributes<HTMLElement>) => {
  const { t } = useTranslation("global");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
      

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      alert("Message sent!");
      form.reset();
    } catch (err) {
        console.error("EmailJS error:", err);
        console.log(JSON.stringify(err, null, 2));
        
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-title" className="gap-12" {...props}>
      <header>
        <Title id="contact-title">
          {t("pages.main.sections.contact.title")} <Strong>{t("pages.main.sections.contact.strong")}</Strong>
        </Title>
      </header>

      {/* ✅ EmailJS submit */}
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-6 inlg:gap-3">
          <legend className="sr-only">
            {t("pages.main.sections.contact.form.legend")}
          </legend>

          <div>
            <Label htmlFor="name">{t("pages.main.sections.contact.form.name.label")}</Label>
            <Input
              id="name"
              name="from_name"
              placeholder={t("pages.main.sections.contact.form.name.placeholder")}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">{t("pages.main.sections.contact.form.email.label")}</Label>
            <Input
              id="email"
              name="from_email"
              type="email"
              placeholder={t("pages.main.sections.contact.form.email.placeholder")}
              required
            />
          </div>

          <div>
            <Label htmlFor="message">{t("pages.main.sections.contact.form.message.label")}</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("pages.main.sections.contact.form.message.placeholder")}
              required
            />
          </div>

          <Submit type="submit">{t("pages.main.sections.contact.form.button.text")}</Submit>
        </fieldset>
      </form>
    </Section>
  );
};
