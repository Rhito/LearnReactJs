import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useId,
} from "react";
import style from "./Input.module.css";

export default forwardRef(function Input(
  {
    label,
    prefix,
    suffix,
    type = "text",
    className = "",
    inputClassName = "",
    isFocused = false,
    id,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className={`${style.inputWrapper} ${className}`}>
        {prefix && (
          <label htmlFor={inputId} className={style.prefix}>
            {prefix}
          </label>
        )}
        <input
          {...props}
          id={inputId}
          type={type}
          className={`${style.textInput} ${inputClassName}`}
          ref={localRef}
        />
        {suffix && (
          <label htmlFor={inputId} className={style.suffix}>
            {suffix}
          </label>
        )}
      </div>
    </div>
  );
});
