import React from "react";
import Card from "react-bootstrap/Card";
import forexample from "../images/forexample.PNG";

export default function Mailform() {
  return (
    <div className="container">
      <div className="card">
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={forexample} />
          <Card.Body>
            <Card.Title>00기업 사전과제</Card.Title>
            <Card.Text>
              공유하고 싶은 사전과제를 아래의 이메일로 보내주세요
              <br />
              <br />
              <p class="text-center">alleneffort1994@gmail.com</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="description">
        <h3>예시)00회사 사전과제</h3>
        <h4>요구사항</h4>
        <h5>1.ID로그인 ,일회용 번호, QR코드를 누르면 UI 디자인 변경</h5>
        <h5>2.아이콘 사용</h5>
        <h5>3.해당 소스코드는 git으로 제출</h5>

        <h6>
          저작권으로 인해 불상사가 생길수 있으니 똑같이 올리지 않고 관리자
          임의로 비슷하게 작성합니다.
        </h6>
      </div>
    </div>
  );
}
