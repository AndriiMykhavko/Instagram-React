import React from "react";
import s from "./formsControl.module.css";

export const FormControl = ({ input, meta, el, ...props }: any) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {React.createElement(el, { ...input, ...props })}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

// export const TextArea = (props) => {
//   //const { input, meta, child, ...restProps } = props;
//   return (
//     <FormControl {...props}>
//       {/* <textarea {...input} {...restProps} /> */}
//     </FormControl>
//   );
// };

// export const LoginInput = (props) => {
//   //const { input, meta, child, ...restProps } = props;
//   return (
//     <FormControl {...props}>
//       {/* <input {...input} {...restProps} /> */}
//     </FormControl>
//   );
// };

// export const LoginInput = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + " " + (hasError ? s.error : "")}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };
