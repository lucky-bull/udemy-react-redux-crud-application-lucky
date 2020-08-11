import React from "react";

// function App() {
//   return(
//     <React.Fragment>
//       <label htmlFor="bar">aaa</label>
//       <input type="text" onChange={() => {console.log('change')}}></input>
//     </React.Fragment>
//   )
// }

const App = () => {
  // 一括で変数で管理して、mapで回しながら表示
  // ユニークキー どのdomが変更になったのかを管理してるから。必要最低限のdomの範囲をみている。
  // index を入れるのが最良
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "miki", age: 27 },
    { name: "NoName" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I'm {props.name}, and {props.age} years old.
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
