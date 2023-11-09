"use client";
import Link from "next/link";
import { useState } from "react";

export default function Cabecalho() {

  const userLogado = JSON.parse(sessionStorage.getItem("user-obj"));
  const [usuario] = useState(userLogado);

  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("user-obj");
    window.location.href = "/";
  }

  if(sessionStorage.getItem("token-user")){
  return (
    <header className="cabecalho">
      <div>
        <p>EMAIL: {usuario.email}</p>
      </div>
      <h2>MEUS PRODUTOS</h2>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
        <li>
          <Link href="/consumo/eletro-view">ELETRÔNICOS</Link>
        </li>
        <li>
          <Link href="/produtos/calca">CALÇA</Link>
        </li>
        <li>
          <Link href="/produtos/camisa">CAMISA</Link>
        </li>
        <li>
          <Link href="/produtos/meia">MEIA</Link>
        </li>
        <li>
          <Link href="/produtos/tenis">TÊNIS</Link>
        </li>
      </ul>
    </header>
  );
  }else{
    return (
      <header className="cabecalho">
        <h2>MEUS PRODUTOS</h2>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/login">LOGIN</Link>
          </li>
        </ul>
      </header>
    );
  }
}