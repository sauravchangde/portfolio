'use client';

import { Article, Desc, Figure, Item, Title as Titl } from "./elements/tools";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Tools = (props: React.HTMLAttributes<HTMLElement>) => {
  const { t } = useTranslation("global");

  return (
    <Section
      id="tools"
      aria-labelledby="tools-title"
      className="gap-12"
      {...props}
    >
      <header>
        <Title id="tools-title">
          {t("pages.main.sections.tools.title")}{" "}
          <Strong>{t("pages.main.sections.tools.strong")}</Strong>
        </Title>
      </header>

      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 insm:gap-x-1">

        {/* Java */}
        <Item>
          <Link
            href="https://www.java.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="java-title"
            aria-describedby="java-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/java-original.svg" />
              <div>
                <Titl id="java-title">{t("pages.main.sections.tools.items.java.name")}</Titl>
                <Desc id="java-desc">{t("pages.main.sections.tools.items.java.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* Python */}
        <Item>
          <Link
            href="https://www.python.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="python-title"
            aria-describedby="python-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/python-original.svg" />
              <div>
                <Titl id="python-title">{t("pages.main.sections.tools.items.python.name")}</Titl>
                <Desc id="python-desc">{t("pages.main.sections.tools.items.python.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* Docker */}
        <Item>
          <Link
            href="https://www.docker.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="docker-title"
            aria-describedby="docker-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/docker-original.svg" />
              <div>
                <Titl id="docker-title">{t("pages.main.sections.tools.items.docker.name")}</Titl>
                <Desc id="docker-desc">{t("pages.main.sections.tools.items.docker.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* TypeScript */}
        <Item>
          <Link
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="typescript-title"
            aria-describedby="typescript-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/typescript-original.svg" />
              <div>
                <Titl id="typescript-title">{t("pages.main.sections.tools.items.typescript.name")}</Titl>
                <Desc id="typescript-desc">{t("pages.main.sections.tools.items.typescript.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* FastAPI */}
        <Item>
          <Link
            href="https://fastapi.tiangolo.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="fastapi-title"
            aria-describedby="fastapi-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/fastapi-original.svg" />
              <div>
                <Titl id="fastapi-title">{t("pages.main.sections.tools.items.fastapi.name")}</Titl>
                <Desc id="fastapi-desc">{t("pages.main.sections.tools.items.fastapi.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* PostgreSQL */}
        <Item>
          <Link
            href="https://www.postgresql.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="postgres-title"
            aria-describedby="postgres-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/postgresql-original.svg" />
              <div>
                <Titl id="postgres-title">{t("pages.main.sections.tools.items.postgres.name")}</Titl>
                <Desc id="postgres-desc">{t("pages.main.sections.tools.items.postgres.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* Google LLM (Gemini) */}
        <Item>
          <Link
            href="https://ai.google.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="googlellm-title"
            aria-describedby="googlellm-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/google-gemini.svg" />
              <div>
                <Titl id="googlellm-title">{t("pages.main.sections.tools.items.googlellm.name")}</Titl>
                <Desc id="googlellm-desc">{t("pages.main.sections.tools.items.googlellm.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* OpenAI */}
        <Item>
          <Link
            href="https://openai.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="openai-title"
            aria-describedby="openai-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/openai-original.svg" />
              <div>
                <Titl id="openai-title">{t("pages.main.sections.tools.items.openai.name")}</Titl>
                <Desc id="openai-desc">{t("pages.main.sections.tools.items.openai.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* GCP */}
        <Item>
          <Link
            href="https://cloud.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="gcp-title"
            aria-describedby="gcp-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/gcp-original.svg" />
              <div>
                <Titl id="gcp-title">{t("pages.main.sections.tools.items.gcp.name")}</Titl>
                <Desc id="gcp-desc">{t("pages.main.sections.tools.items.gcp.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

        {/* Vercel */}
        <Item>
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="vercel-title"
            aria-describedby="vercel-desc"
            className="outline-none"
          >
            <Article>
              <Figure figure="/svgs/tools/vercel-original.svg" />
              <div>
                <Titl id="vercel-title">{t("pages.main.sections.tools.items.vercel.name")}</Titl>
                <Desc id="vercel-desc">{t("pages.main.sections.tools.items.vercel.description")}</Desc>
              </div>
            </Article>
          </Link>
        </Item>

      </ul>
    </Section>
  );
};
