import BrutalistButton from "@/components/Button";
import {ArrowSquareOut, CodeSimple} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface IProjectCardProps {
  title: string
  description: string
  imgUrl?: string
  altImg?: string
  demoHref?: string
  codeHref?: string
}

export function ProjectCard(props: IProjectCardProps) {
  const { title, description, imgUrl, altImg, demoHref, codeHref } = props;
  return (
    <div className={"bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"}>
      {imgUrl ? (
        <div className={"border-4 border-black h-48 overflow-hidden mb-4"}>
          <Image src={imgUrl} alt={altImg ? altImg : "Фото проекта"} className={"w-full h-full object-cover"} />
        </div>
      ) : (
        <div className={"border-4 border-black h-48 bg-gray-200 flex items-center justify-center mb-4"}>
          <span className={"text-gray-500"}>К сожалению, здесь пусто 😔</span>
        </div>
      )}
      <h3 className={"text-xl font-bold mb-2 uppercase"}>{title}</h3>
      <p className={"mb-4"}>{description}</p>
      <div className={"flex gap-4"}>
        {demoHref && (
          <BrutalistButton as={"a"} href={demoHref} target={"_blank"} size={"sm"} variant={"outline"}>
            <ArrowSquareOut className="mr-2 h-4 w-4"/> Демонстрация
          </BrutalistButton>
        )}
        {codeHref && (
          <BrutalistButton as={"a"} href={codeHref} target={"_blank"} size={"sm"} variant={"secondary"}>
            <CodeSimple className="mr-2 h-4 w-4"/> Код
          </BrutalistButton>
        )}
      </div>
    </div>
  )
}