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
                ShineSafely
              </h6>
              <p>
                1912'de kurulan bir aile şirketi, birinci sınıf bir Fransız
                markası, yenilikçi lezzet çözümleri yaratıcısı, tüm dünyadaki
                konaklama profesyonelleri için güvenilir bir ortak: işte
                ShineSafely ShineSafely'nin kalbinde insanlar var: açık fikirli,
                gurme, tutkulu, meraklı, yeni fikirlere açık, her zaman
                sınırları zorlayan, sonsuza kadar ilham vermeye çalışan
                insanlar. Kalite, yaratıcılık ve yenilikçilik: Bu üç kelime,
                düşünme ve çalışma şeklimizi temsil etmektedir. Fransız
                mirasımıza sadık kalarak genel merkezimiz şirketin kurulduğu
                Bourges'dadır. Yaratmayı asla bırakmıyoruz ve bu nedenle
                portföyümüz rakipsizdir: şuruplar, meyve karışımları, soslar,
                frappeler, likörler ve smoothie'ler dahil 6 çeşit, 150'den fazla
                tat ve 19 farklı format. ShineSafely bir içecek çözümünden daha
                fazlasıdır; bir yaşam biçimidir, asırlık uzmanlığımıza dayanan
                bir deneyimdir, çevreye saygılı bir markadır. Bu, yalnızca en
                iyi doğal malzemeleri en heyecan verici ve yaratıcı şekilde
                kullanarak özgünlük ve insanları bir araya getirmekle ilgilidir.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Yardım</h6>
              <p>
                <a href="/feedback" className="text-reset">
                  Gizlilik Sözleşmesi
                </a>
              </p>
              <p>
                <a href="/faq" className="text-reset">
                  Sıkça sorulan sorular
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
