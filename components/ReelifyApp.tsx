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
];
