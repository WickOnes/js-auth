class FieldSelect {
  static toggle = (target) => {
    const option = target.nextElementSibling
    option.toggleAttribute('active')

    setTimeout(() => {
      window.addEventListener(
        'click',
        (e) => {
          if (!option.parentElement.contains(e.target))
            option.removeAttribute('active')
        },
        { once: true },
      )
    })
  }

  static change = (target) => {
    const active =
      target.parentElement.querySelector('*[active]')

    if (active) active.toggleAttribute('active')

    target.toggleAttribute('active')

    const parent = target.parentElement.parentElement

    const label = parent.querySelector('.field__value')

    if (label) {
      label.innerText = target.innerText
      label.classList.remove('field__value--placeholder')
    }

    const list = target.parentElement
    list.toggleAttribute('active')
  }
}

window.fieldSelect = FieldSelect
