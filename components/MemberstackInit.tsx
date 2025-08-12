"use client";
import { useEffect } from "react";
import memberstackDOM from "@memberstack/dom";
export default function MemberstackInit(){ useEffect(()=>{ memberstackDOM.init({ publicKey: "pk_89825d0662d17a373e2b" }); },[]); return null; }