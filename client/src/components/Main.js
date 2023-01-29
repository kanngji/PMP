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
        <div className="right_side">
          <div className="cheer">
            <h2>
              중요한 것은 목표를 이루는 것이 아니라 그 과정에서 무엇을 배우며
              얼마나 성장하느냐이다.
            </h2>
          </div>
          <scetion>
            <div className="card">
              <img src={data_img}></img>
              <div className="content">
                <span className="title">Data</span>
                <span>
                  프로그램을 운용할 수 있는 형태로 기호화·숫자화한 자료
                </span>
              </div>
            </div>
            <div className="card">
              <img src={network_img}></img>
              <div className="content">
                <span className="title">네트워크</span>
                <span>
                  네트워크는 둘 이상의 컴퓨터와 이들을 연결하는 링크의
                  조합입니다. 물리적 네트워크는 네트워크를 구성하는
                  하드웨어(어댑터, 케이블 및 전화선과 같은 장비)입니다.
                  소프트웨어 및 개념 모델이 논리적 네트워크를 형성합니다.
                </span>
              </div>
            </div>
            <div className="card">
              <img src={devops_img}></img>
              <div className="content">
                <span className="title">데브옵스</span>
                <span>
                  데브옵스는 소프트웨어의 개발과 운영의 합성어로서, 소프트웨어
                  개발자와 정보기술 전문가 간의 소통, 협업 및 통합을 강조하는
                  개발 환경이나 문화를 말합니다.
                </span>
              </div>
            </div>
          </scetion>
        </div>
      </div>
    </>
  );
}
