export const required = (value: string) => {
  if (value) return undefined;
  return "Filed is required";
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value && value.length > maxLength)
    return `Max length is ${maxLength} symbols`;
  return undefined;
};

export const minLengthCreator = (minLength: number) => (value: string) => {
  if (value && value.length < minLength)
    return `Min length is ${minLength} symbols`;
  return undefined;
};