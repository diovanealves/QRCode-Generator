import { useState } from "react";

import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

export default function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQRCodeLink] = useState("");

  function handleIMGGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQRCodeLink(url);
        console.log(url);
      }
    );
  }

  function handleQRCode(e) {
    setLink(e.target.value);
    handleIMGGenerate(e.target.value);
  }

  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <QRCode className="border" value={link} />

      <input
        className="max-w-sm w-full p-3 mt-8 outline-none border-2 border-[#8CD1FF] bg-[#041A27] rounded-lg"
        placeholder="Digite o seu link!!!!"
        value={link}
        onChange={(e) => handleQRCode(e)}
      />
      <a
        className="w-40 p-3 mt-3 outline-none bg-[#8CD1FF] rounded-lg text-center text-[#000]"
        href={qrcodeLink}
        download={`qrcode.png`}
      >
        Baixar QrCode
      </a>
    </div>
  );
}
