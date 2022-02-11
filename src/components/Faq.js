import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Faq() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Sıkça Sorulan Sorular</h4>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Ürün Bozuk Çıktı Ne Yapmalıyım
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Kurulumu servis tarafından yapılacak ürün ya da elektronik bir ürün arızalı ise servis raporu gerekmektedir. Ürünle ilgili servis raporunuz varsa; iade formunu doldurarak ürünü ve raporu firmamıza gönderebilirsiniz. Elektronik olmayan ürünleriniz arızalı ise, siparişinizin teslimat tarihinden itibaren 0-14 günlük süre içinde iade işlemi başlatabilirsiniz. 14 günlük cayma süresi dışında olan arızalı ürünlerin tamamı için servis raporu gerekmektedir.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Sipariş ettiğim ürün yerine farklı ürün geldi ne yapabilirim?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Ürün paketleme ya da kargo gönderisi etiketleme sırasında yaşanan bir sorundan dolayı farklı ürün gönderilmiş olabilmektedir. Yanlış gelen ürün için, ürünle birlikte gönderilen iade formunu doldurmalı ve Hesabım-Siparişlerim menüsünden online iade talebinizi iletmelisiniz. İade talebinizi oluşturmanızın ardından size verilecek iade kodu ile ücretsiz gönderim yapabilirsiniz. İade ve geri gönderimle ilgili detaylı bilgi alabilmek için Ürün İade İşlemleri başlığını ziyaret edebilirsiniz.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Üye olmadan sipariş oluşturabilir miyim ?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Sipariş oluşturabilmeniz için üye olmanız gerekmektedir.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
