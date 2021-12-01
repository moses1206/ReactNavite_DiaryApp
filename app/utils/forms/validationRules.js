const validation = (value, rules, form) => {
  let valid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        // console.log(valid);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        // console.log(valid);
        break;
      case 'minLength':
        valid = valid && validMinLength(value, rules[rule]);
        // console.log(valid);
        break;
      case 'confirmPassword':
        valid =
          valid &&
          validateConfirmPassword(value, form[rules.confirmPassword].value);
        // console.log(valid);

        //   rules: {
        //     confirmPassword: 'password',
        //   },
        break;
      default:
        valid = ture;
    }
  }

  return valid;
};

const validateConfirmPassword = (confirmPassword, password) => {
  return confirmPassword === password;
};

const validMinLength = (value, ruleValue) => {
  if (value.length >= ruleValue) {
    return true;
  }

  return false;
};

const validateEmail = value => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   test는 자바스크립트 내장함수로 정규식을 검증한다.
  return expression.test(String(value).toLocaleLowerCase());
};

const validateRequired = value => {
  if (value !== '') {
    return true;
  }
  return false;
};

export default validation;
