import React from 'react';
import NewInfo from "components/news/new-info";
import {useRouter} from "next/router";
import { cfg } from "config/default";

const Info = () => {
  const router = useRouter();
  const data = cfg.newsContents.filter(news => news.url === router.query.info);
  const realEstateQuery = router.query.info === 'real-estate-and-interior-design';
  return <NewInfo data={data.length ? data[0] : {}} realEstateQuery={realEstateQuery}/>
};

export default Info;