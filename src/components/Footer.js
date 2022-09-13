import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Artin-Systems
              </h6>
              <p>
              Art-In Systems, başta Akdeniz Bölgesi olmak üzere, büyük-küçük her türlü firmanın bilişim ihtiyacını karşılayabilmek için, 2007 yılından itibaren özel bilişim çözümleri üretmektedir.

Ürün ve hizmet ağı ile hızlı bir şekilde büyüyerek Türkiye çapında iş yapan bir bilişim firması haline gelmiştir. İsmini bu güne kadar geliştirmiş olduğu yazılım uygulamalarında kullandığı ve kullanacağı Artificial Intelligence (Yapay Zeka) algoritmalarından almıştır. Bu sayede geliştirilmiş olan uygulamalar hızlı, kolay kullanılan, kolay adapte edilen, güvenilir, uygulamalar olmuştur.

Buradan yola çıkarak kendi felsefesini de; her yeniliğe açık, her zaman öğrenerek hızlı gelişen, yaptığı her işi müşterinin faydası için yapan, doğru çözümler üreten firma olarak belirlemiştir.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Yardım</h6>
              <p>
                <a href="/feedback" className="text-reset">
                  Geri İade İçin Bilgilendirme
                </a>
              </p>
              <p>
                <a href="/faq" className="text-reset">
                  Sıkca sorulan sorular
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="/">
          ShineSafely
        </a>
      </div>
    </footer>
  );
};

export default Footer;
