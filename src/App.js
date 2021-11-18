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
    const params = new URLSearchParams(window ? window.location.search : {});
    const upi = params.get("upi");
    const rname = params.get("pn");
    setUrl("upi://pay?cu=INR&pa=" + upi + "&pn=" + rname);
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