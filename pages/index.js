
import  Axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home({ list }) {

  /* 
  개발환경에서 열면 (npm run dev) .env.development에서 가져옴
  프로덕션 환경에서 열면 (npm run start) .env.production에서 가져옴
  */
  return (
    <div>
      <Head>
          <title>HOME | 한울</title>
          <meta name="description" content="한울이의 홈입니다"></meta>
      </Head>
    
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    
    </div>
  );
}



export async function getStaticProps() { //[id].js 와는 다르게 url이름처럼 전달해줄것이 딱히 없어 인자를 전달해줄 필요x
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    },
  };
}


/* 
데이터를 받아오는 정적페이지

next js에서도 제품리스트같은 페이지는 정적 생성을 권장하고 있음
*/