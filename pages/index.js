
import  Axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoding, setIsLoading] = useState(true); //로딩상태값

  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getDate() {
    Axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setList(res.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>
      <Head>
          <title>HOME | 한울</title>
      </Head>
      {isLoding && (
        <div style={{ padding: "300px 0" }}>
          <Loader active inline='centered'>
            Loding
          </Loader>
        </div>
      )}
      {!isLoding && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
      
    </div>
  );
}
