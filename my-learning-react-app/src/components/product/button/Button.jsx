import localStyles from "./Button.module.css";

export default function Button({
  className = "",
  prefix,
  style,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${localStyles.primaryButton} ${
        disabled ? localStyles.primaryButtonDisabled : ""
      } ${className}`}
      style={style}
      disabled={disabled}
    >
      {prefix && (
        <span style={{ color: style?.color }} className={localStyles.prefix}>
          {prefix}
        </span>
      )}
      {children}
    </button>
  );
}
