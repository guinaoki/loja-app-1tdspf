"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const navigate = useRouter();

  if(sessionStorage.getItem("token-user")){
  return (
    <>
      <h1>HOME</h1>

      <div>


        <figure>
          <Image src="/img/black-friday.jpg" alt="Placa escura" width={640} height={360}/>
        </figure>

      </div>

    </>
    )
  }else{
    navigate.push("/login");
  }
}