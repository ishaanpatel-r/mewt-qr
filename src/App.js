import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "https://mewt.in/src/mewt_small_flat.svg",
  dotsOptions: {
    color: "#444B54",
    type: "classy-rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 15
  },
  cornersSquareOptions: {
    type: "extra-rounded"
  }
});

const App = () => {
  const [url, setUrl] = useState(
    "upi://pay?cu=INR&pa=mewttest5027316@yesbank&pn=mewt"
  );
  const ref = useRef(null);

  useEffect(() => {
    console.log('use effect aaya bhai')
    const params = new URLSearchParams(window ? window.location.search : {});
    console.log('params aare')
    const upi = params.get("upi").replace('%40', '@');
    const rname = params.get("pn");
    const upiURL = `upi://pay?cu=INR&pa=${upi}&pn=${rname}`;
    // https://ishaanpatel-r.github.io/mewt-qr/?upi=mewttest5027316@yesbank&pn=mewt
    console.log(upiURL, 'bhaaaaaaaaaai');
    setUrl(upiURL);
  }, []);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);

  return (
    <div className="App">
      <div ref={ref} />
    </div>
  );
}

export default App;