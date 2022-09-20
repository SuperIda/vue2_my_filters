//千分位加逗号
export function toThousandFilter(value) {
  if (!value) return "";
  value = value.toString();
  return value.replace(
    value.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g,
    "$1,"
  );
}
// 首字母大写
export function capitalize(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// 单位转换

// 文本格式化
// 时间格式化之类的等
