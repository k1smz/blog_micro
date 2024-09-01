import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import style from "./page.module.css";

export default async function page() {
  const data = await getMembersList();
  return (
    <div className={style.container}>
      {data.contents.length === 0 ? (
        <p className={style.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={style.list}>
              <Image src={member.image.url} alt="" width={member.image.width} height={member.image.height} className={style.image} />
              <dl>
                <dt className={style.name}>{member.name}</dt>
                <dd className={style.position}>{member.position}</dd>
                <dd className={style.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
