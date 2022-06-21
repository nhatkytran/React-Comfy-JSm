function getAttr(target, attr) {
  let result = target[attr] || target.getAttribute(attr);

  if (target.type === "checkbox" && attr === "value") result = target.checked;

  return result;
}

export default getAttr;
