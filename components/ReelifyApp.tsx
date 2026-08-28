"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ChevronLeft,
  Play,
  Download,
  Send,
  Check,
  Wand2,
  Music2,
  Type as TypeIcon,
  ShoppingBag,
} from "lucide-react";

type ReelifyAppProps = {
  userId: string;
  username?: string;
  accessLevel: "admin" | "customer" | "no_access";
};

const PRODUCTS = [
  { id: 1, name: "Satin Slip Dress", price: 92, color: "#8B3A3A" },
  { id: 2, name: "Gold Layered Necklace", price: 46, color: "#B08A3E" },
  { id: 3, name: "Amber Oud Perfume", price: 95, color: "#6B4226" },
  { id: 4, name: "Leather Crossbody Bag", price: 89, color: "#3E5C76" },
  { id: 5, name: "Oversized Cotton Hoodie", price: 68, color: "#2B2118" },
  { id: 6, name: "Statement Hoop Earrings", price: 28, color: "#7A4E8C" },
];

const TEMPLATES = [
  { id: "unbox", name: "Unboxing", desc: "Reveal + reaction pacing", duration: "0:15" },
  { id: "before", name: "Before / After", desc: "Split-screen transformation", duration: "0:12" },
  { id: "pov", name: "POV Try-On", desc: "First-person styled shots", duration: "0:18" },
  { id: "trend", name: "Trending Cuts", desc: "Fast beat-synced edits", duration: "0:10" },
];

const CAPTIONS = [
  "wait for it... 👀",
  "the reviews weren't lying",
  "3 ways to style this",
  "you need this in your life",
];export default function ReelifyApp({ userId, username, accessLevel }: ReelifyAppProps) {
  const [screen, setScreen] = useState("home");
  const [product, setProduct] = useState(null);
  const [template, setTemplate] = useState(null);
  const [caption, setCaption] = useState(CAPTIONS[0]);
  const [progress, setProgress] = useState(0);

  const isPaidOrAdmin = accessLevel === "admin";

  const goBack = () => {
    if (screen === "product") setScreen("home");
    else if (screen === "template") setScreen("product");
    else if (screen === "caption") setScreen("template");
    else if (screen === "result") setScreen("home");
  };

  const startGenerate = () => {
    setScreen("generating");
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 14 + Math.random() * 10;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setScreen("result"), 350);
      }
      setProgress(Math.min(100, Math.round(p)));
    }, 260);
  };

  const reset = () => {
    setProduct(null);
    setTemplate(null);
    setCaption(CAPTIONS[0]);
    setScreen("home");
  };

  const steps = ["product", "template", "caption"];
  const stepIndex = steps.indexOf(screen);

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif", color: "#F2F0ED", background: "#17171C" }}>
      <p>Reelify UI placeholder — full screens added in next update.</p>
      <p>Signed in as: {username || userId}</p>
    </div>
  );
}
