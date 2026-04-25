import React from "react";

export default function Formatter(val = 0, region = "vi-VN", currency = "VND") {
  return new Intl.NumberFormat(region, {
    style: "currency",
    currency: currency,
  }).format(val);
}
