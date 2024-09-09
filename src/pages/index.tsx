"use client";

import Header from "@/components/Header";
import Home from "@/components/Home";


export default function Index() {
    return (
      <div className="body">
        <Header position="home" />
        <Home/>
      </div>
    );
}