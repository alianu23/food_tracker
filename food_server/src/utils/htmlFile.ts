
const GenerateConfirm = () => {
    return `<div
    style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 12px;
    border-radius: 10px;
    padding: 20px;
    border-color: #333333;
    "
  >
    <h1>Congratulation</h1>
    <h3 style="line-height: 24px; color: #333333; font-size: 24px">
      Your email confirmed.
    </h3>
    <h3 style="line-height: 24px; color: #333333; font-size: 24px">
      You can now login to the
      <span style="color: #18ba51"> PLATFORM </span>
    </h3>
    <img
      class="adapt-img"
      src="https://eebwpio.stripocdn.email/content/guids/CABINET_6e1f8df35a5b479a57a8e76821d0a0c5afaaff2e27127ec4d44ac9781b8d8b1f/images/57b54818e2011d482548fb54201ce6c1.gif"
      alt
      style="
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      "
      width="365"
      height="274"
    />
    <a href="http://localhost:3000/login">
      <button
        style="
          background-color: #18ba51;
          color: aliceblue;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 20px;
          padding-right: 20px;
          border-radius: 5px;
          border-color: #18ba51;
          font-size: 24px;
        "
      >
        Go To Login Page
      </button>
    </a>
  </div>`;
  };
 export const htmlConfirm = GenerateConfirm();