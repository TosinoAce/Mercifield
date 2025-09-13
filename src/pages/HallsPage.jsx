import React from "react";
import MainLayout from "../layouts/MainLayout";
import HallIntro from "../components/HallIntro";
import AutoScrollCarousel from "../components/AutoScrollCarousel";

const HallsPage = () => {
  return <MainLayout>
    <AutoScrollCarousel />
    <HallIntro />
  </MainLayout>;
};

export default HallsPage;
