import React from "react";
import backend_img from "../images/backend_img.png";
import data_img from "../images/data_img.png";
import devops_img from "../images/devops_img.png";
import frontend_img from "../images/frontend_img.png";
import it_img from "../images/it_img.jpg";
import network_img from "../images/network_img.png";

export default function Main() {
  return (
    <>
      <div className="main_container">
        <div className="left_side">
          <scetion>
            <div className="card">
              <img src={it_img}></img>
              <div className="content">
                <span className="title">IT</span>
                <span>
                  정보기술은 전기 통신, 방송, 컴퓨팅, 통신망 등 사회 기반을
                  형성하는 유형 및 무형의 기술 분야이다.
                </span>
              </div>
            </div>
            <div className="card">
              <img src={frontend_img}></img>
              <div className="content">
                <span className="title">프론트 엔드</span>
                <span>
                  프론트엔드 개발은 HTML, CSS 및 JavaScript를 사용하여 웹
                  사이트의 그래픽 사용자 인터페이스를 개발하여 사용자가 해당 웹
                  사이트를 보고 상호 작용할 수 있도록 합니다
                </span>
              </div>
            </div>
            <div className="card">
              <img src={backend_img}></img>
              <div className="content">
                <span className="title">백엔드</span>
                <span>
                  백엔드 개발은 웹사이트, 애플리케이션 또는 프로그램이 작동할 수
                  있도록 하는 숨겨진 프레임워크 프로세스를 다룹니다. 또한 백엔드
                  개발자는 작업 중인 웹 사이트 또는 애플리케이션의 서버 및
                  데이터베이스에서 발생하는 일을 처리합니다.
                </span>
              </div>
            </div>
          </scetion>
        </div>
        <div className="right_side"></div>
      </div>
    </>
  );
}
