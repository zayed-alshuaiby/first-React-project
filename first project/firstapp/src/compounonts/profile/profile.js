import "./profile.css"
export default function Profile() {
  return (
    <div  className="mainCard">
      <h1 className="redBg">معلومات شخصية</h1>
      <Infor />
      <button onClick={M_alert}>click me</button>
    <hr></hr>
    </div>
  );
}
function Infor() {
  const info = {
    name: "زايد",
    email: "zayed@gmail.com",
    phone: "774656846",
    job: "programmer",
  };
  return (
    <div>
      <h3> الاسم: <span className={info.name == "زايد"? "greenBg" : "shadow"}>  {info.name}</span> </h3>
      <h3>الايميل: {info.email}</h3>
      <h3> الوظيفة: {info.job}</h3>
      <h3>رقم الهاتف: {info.phone}</h3>
    </div>
  );
}

function M_alert() {
    return(
        alert("Yes, I did it !")
    );
}
