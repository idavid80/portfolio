import React, { useState } from "react";
import "./SocialCard.css";

const SocialCard = () => {
  const [isMouseOver, setIsMouseOver] = useState(true);

  const viewRssLogo = () => {
    setIsMouseOver(!isMouseOver);
  };

  return (
    <div className="card">
      <div className="background"></div>
      <div className="rss">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.667 31.69"
          className="rss-svg"
        >
          <path
            id="Path_6"
            data-name="Path 6"
            d="m.017 12.754h.029c3.078 0 5.863 1.257 7.869 3.286l.001.001c2.023 2.025 3.274 4.822 3.274 7.911v.041-.002h4.6c0-.004 0-.009 0-.014 0-8.722-7.056-15.797-15.772-15.826h-.003zm0-8.155c10.664.045 19.291 8.699 19.291 19.369v.033-.002h4.602c0-.008 0-.017 0-.026 0-13.209-10.683-23.924-23.881-23.974h-.005v4.6zm6.357 16.186v.002c0 1.76-1.427 3.186-3.186 3.186s-3.186-1.427-3.186-3.186c0-1.76 1.427-3.186 3.186-3.186h.011-.001c1.755.006 3.175 1.429 3.176 3.185z"
            transform="translate(0 0)"
          ></path>
        </svg>
      </div>
      <a href="https://github.com/idavid80" aria-details="my github">
        <div className="box box1">
          <span className="icon">
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
            >
              <path d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
            </svg>
          </span>
        </div>
      </a>
      <div className="box box2">
        {" "}
        <span className="icon">
          <svg
            viewBox="-2 -2 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path>
          </svg>
        </span>
      </div>
      <div className="box box3">
        <span className="icon">
          <svg
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
          </svg>
        </span>
      </div>
      <div className="box box4"></div>
    </div>
  );
};

export default SocialCard;
