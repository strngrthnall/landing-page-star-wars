document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero')
  const alturaHero = heroSection.clientHeight

  const buttons = document.querySelectorAll('[data-tab-button]')

  window.addEventListener('scroll', () => {
    const posicaoAtual = window.scrollY

    if(posicaoAtual < alturaHero) {
      ocultaElementosDoHeader()
    } else {
      exibeElementosDoHeader()
    }
  })

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (botao) => {
      const tabTarget = botao.target.dataset.tabButton
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
      hideAllTabs()
      tab.classList.add('examples__list--is-active')
      removeActiveButton()
      botao.target.classList.add('examples__tabs__button--is-active')
    })
  }
})

function ocultaElementosDoHeader(){
  const header = document.querySelector('.header')
  header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
  const header = document.querySelector('.header')
  header.classList.remove('header--is-hidden')
}

function hideAllTabs() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]')

  for(let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('examples__list--is-active')
  }

}

function removeActiveButton() {
  const buttons = document.querySelectorAll('[data-tab-button]')

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('examples__tabs__button--is-active')
  }
}