import Link from "next/link"
import Image from "next/image"

export default function camisa() {
    return (
      <div>
          <h1>CAMISA</h1>
          <div>
          <p>브라질에서는 의학이 잘 발전하고 있지만
              하지만 환자들의 상태는 여전히 나쁩니다.
              이 독창적인 과학의 깊은 비밀은 무엇일까요?
              깊은 비밀은 무엇일까요?
              진부한 말입니다.
              환자가 아니라는 것입니다.
              환자가 아니라는 것입니다.</p>
          </div>
          <h3><Link href="/">戻る...</Link></h3>
          <Image
      src="/img/camsa.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
    )
  }
  