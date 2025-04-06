const cn = (base?: string, classNames?: string, ...variants: object[]) => {
  let newClassnames: string = ``
  for (const variant of variants) {
    for (const [a, b] of Object.entries(variant)) {
      if (b)
        newClassnames = `${newClassnames} ${a}`;
    }
  }
  let classes = ``
  if (base)
    classes = `${classNames}`
  if (classNames){
    if (classes)
      classes = `${classes} ${classNames}`
    else
      classes = `${classNames}`
  }
  if (newClassnames){
    if (classes)
      classes = `${classes} ${newClassnames}`
    else
      classes = `${newClassnames}`
  }
  return classes
}

export {cn}