import React from "react";
import PropTypes from "prop-types";
/*
 * propertyに対する型のチェックを定義する方法について
 */

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "miki", age: 27 },
    { name: "NoName", age: 3 },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
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

// isRequired: 属性が設定されていないとだめ
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
