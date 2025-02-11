// utils/passwordStrength.ts
export const passwordStrength = (password: string) => {
    const lengthCriteria = password.length >= 8;
    const letterCriteria = /[a-zA-Z]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    const strength = lengthCriteria && letterCriteria && specialCharCriteria;
  
    return {
      isValid: strength,
      strengthLevel: strength ? "Strong" : "Weak",
      strengthScore: strength ? 100 : 0,
    };
  };