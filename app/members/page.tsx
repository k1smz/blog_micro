import { profile } from "console";
import Image from "next/image";
import style from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "山田太郎",
      position: "CEO",
      profile: "山田太郎は、2021年に設立された株式会社Simpleの代表取締役社長です。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョナサン・スミス",
      position: "CTO",
      profile: "山田太郎は、2021年に設立された株式会社Simpleの代表取締役社長です。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "デイブ・ジョンソン",
      position: "CMO",
      profile: "山田太郎は、2021年に設立された株式会社Simpleの代表取締役社長です。",
    },
  ],
};

export default function page() {
  return (
    <div className={style.container}>
      {data.contents.length === 0 ? (
        <p className={style.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={style.list}>
              <Image src={member.image.url} alt="" width={member.image.width} height={member.image.height} />
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
