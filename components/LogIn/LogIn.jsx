"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CallToAction from "../common/CallToAction/CallToAction";

import "./LogIn.css";
import { useState } from "react";

const LogIn = () => {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [table, setTable] = useState("");
  localStorage.setItem("user", user);
  localStorage.setItem("table", table);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(user, table);
    router.push("/home");
  }
  return (
    <>
      <div
        className="login-global"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          alt="logo"
          className="logo-login"
          src="/images/logo.svg"
          width={205}
          height={39}
        />
        <form
          className="form-login"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <div className="form-container">
            <input
              required
              type="text"
              name=""
              id=""
              placeholder="Tu nombre"
              onChange={(e) => setUser(e.target.value)}
            />
            <select
              required
              name=""
              id=""
              value={table}
              onChange={(e) => setTable(e.target.value)}
            >
              <option value="" disabled>
                Mesa
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </select>
          </div>
          <CallToAction contenido="Ingresar" />
        </form>
      </div>
    </>
  );
};

export default LogIn;
