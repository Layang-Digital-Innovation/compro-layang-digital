import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Client from "~/components/Client";

import Projects from "~/components/Projects";
import { CollaborationModel } from "~/components/CollaborationModel";
import Testimonial from "~/components/Testimonial";
import CallToAction from "~/components/CallToAction";
import Article from "~/components/Article";


import Services from "~/components/Services";
import Footer from "~/components/Footer";
import PerspectiveText from "~/components/PerspectiveText";
import { MessageCircleIcon, MessageCircleReply, MessageCircleX } from "lucide-react";
import CTAButton from "~/components/CTAButton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Layang Digital Innovation" },
    {
      name: "description",
      content: "Company Profile Website Layang Digital Innovation",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <CTAButton/>
      <Hero />
      <Client />
      <Services/>
      <Projects />
      <CollaborationModel />
      <Testimonial />
      <CallToAction />
      <Article />
      <Footer/>
    </>
  );
}
