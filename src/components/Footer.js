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
                ShineSafrly
              </h6>
              <p>
                Kokteyl ve kahve şurupları, meyve püresi ile başladığımız üretim
                ağında bugün 85 çeşit şurup, 30 çeşit püre ile birlikte toplamda
                185 çeşit ürün ile devam etmekteyiz. Ürünlerin üretim aşamasında
                alanında uzman gıda mühendisi ekibimizi AR-GE ekibimizin
                Türkiye’nin her bölgesinden bar içi görevli arkadaşlardan
                topladığı bilgilerle buluşturuyoruz. Yenilikçi tarzımız ile iş
                ortaklarımıza aradıkları her ürünü sunmak ile birlikte özgün
                ürünlerimiz ile bar içi görevli arkadaşların hayal güçlerini
                birleştirip alanımızda yepyeni bir dünya sunuyoruz.
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
                  Şıkca sorulan sorular
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
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/">
          Site Adı
        </a>
      </div>
    </footer>
  );
};

export default Footer;
