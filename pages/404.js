import { Icon } from "semantic-ui-react";

export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}


/* 
404페이지 커스텀
404error같은경우는 statc방식으로 생성해주는게 좋음
*/