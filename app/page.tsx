"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, useDisclosure } from "@nextui-org/react";
import FormModal from "@/components/formModal";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Изучайте иностранные&nbsp;</span>
        <span className={title({ color: "violet" })}>языки&nbsp;</span>
        <br />
        <span className={title()}>легко и эффективно.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Персонализированные карточки для запоминания слов в любом месте и в
          любое время
        </div>
      </div>

      <div className="flex gap-3">
        <Button color="primary" radius="full" variant="shadow" onClick={onOpen}>
          Начать изучение
        </Button>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="mt-10 w-full flex justify-center">
          {/* <Image
            src={heroImage}
            alt="Человек держит в руках смартфон с открытым приложением карточек, вокруг него множество слов на разных языках."
            width={500}
            height={500}
            className="w-full max-w-md"
          /> */}
        </div>
      </div>
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange}></FormModal>
    </section>
  );
}
