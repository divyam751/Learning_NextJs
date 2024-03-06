"use client";
import GlobalCssComponent from "@/components/GlobalCssComponent";
import LearnClientComponent from "@/components/LearnClientComponent";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnImageTag from "@/components/LearnImageTag";
import LearnLinks from "@/components/LearnLinks";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseRouter from "@/components/LearnUseRouter";
import ModuleCssComponent from "@/components/ModuleCssComponent";
import React from "react";

const page = () => {
  return (
    <div className="container">
      {/* <h1>Home Page</h1> */}
      {/* <LearnLinks /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnServerComponent /> */}
      {/* <LearnClientComponent /> */}
      {/* <GlobalCssComponent /> */}
      {/* <ModuleCssComponent /> */}
      {/* <LearnImageTag /> */}
      <LearnDataFetching />
    </div>
  );
};

export default page;
