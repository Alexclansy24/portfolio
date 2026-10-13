import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SideQuests from "@/components/SideQuests";
import Notes from "@/components/Notes";

export const metadata: Metadata = { title: "Side quests" };

export default function ExtraPage() {
  return (
    <>
      <PageHeader
        title="Side quests"
        intro="What I do away from the keyboard, and the notes I write along the way."
      />
      <SideQuests />
      <Notes />
    </>
  );
}
