import {Descript, Layout, Like, Tag} from '@/Components';
import Image from 'next/image';

export default function Home() {
  return (
      <Layout>
        <Image src="/gridimage.jpg"
        alt='Картинка'
        width={345}
        height={250}/>
        <Tag fontw='bold'>Front-end</Tag>
        <Tag fontw='light'>1 мес. назад</Tag>
        <Like likeCounts={4}></Like>
        <Tag size='l' fontw='bold'>Как работать с CSS-Grid</Tag>
        <Descript>CSS Grid Layout (спецификация) или просто гриды — это удобная технология для раскладки элементов на веб-страницах.В отличие от флексбоксов, одновременно работающих только с одним измерением, гриды дают возможность...</Descript>
        <Tag>3 минуты</Tag>
        <Tag isref='true' href='/'>Читать</Tag>
      </Layout>
  );
}
