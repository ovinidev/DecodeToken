"use client";
import { decodeToken } from "@/utils/decodeToken";
import { useState } from "react";
import ReactJson from "react-json-view";

export default function Home() {
  const [token, setToken] = useState({
    jwt: "",
    decoded: {},
  });

  function handleDecodeToken() {
    const decodedToken = decodeToken(token.jwt);

    setToken({
      decoded: decodedToken,
      jwt: token.jwt,
    });
  }
  return (
    <main className="bg-slate-900 min-h-screen flex items-center justify-center">
      <section className="flex flex-col items-center space-y-6 w-4/5 sm:w-[50rem]">
        <textarea
          onChange={(e) =>
            setToken({
              jwt: e.target.value,
              decoded: token.decoded,
            })
          }
          placeholder="Insira o token aqui"
          className="resize-none bg-slate-100 text-slate-900 placeholder:text-slate-600 w-full p-1 h-44 sm:w-[32rem] sm:h-[15rem]"
        />

        <button
          onClick={handleDecodeToken}
          className="text-slate-100 self-center rounded-md bg-pink-600 px-4 py-2"
          type="button"
        >
          Decode
        </button>

        <div className="w-full sm:w-[30rem]">
          <ReactJson
            src={token.decoded}
            theme="bright"
            name={false}
            iconStyle="circle"
            displayDataTypes={false}
            collapsed={1}
            style={{ width: "100%" }}
          />
        </div>
      </section>
    </main>
  );
}
