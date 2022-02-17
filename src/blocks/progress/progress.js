let counter1 = 0
let counter2 = 1
let bool = true

const sections = document.querySelectorAll('section')
const progress = document.querySelector('.progress h2')
const circles = document.querySelectorAll('.progress__circle')

const hero__wrapper = document.querySelector('.hero__wrapper')
const contact__wrapper = document.querySelector('.contact__wrapper')

hero__wrapper.style.transform = 'scale(1)'

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`

  Array.from(circles).forEach(circle => {
    circle.style.backgroundColor = 'transparent'
  })

  document.querySelector(`.progress__circle:nth-of-type(${counter2})`).style.backgroundColor = '#ddd'
}

const pageController = () => {
  bool = true

  if (counter1 === 5) {
    Array.from(sections).forEach(section => {
      section.style.left = '0'
    })

    counter1 = 0
    counter2 = 1

    hero__wrapper.style.transform = 'scale(1)'
    contact__wrapper.style.transform = 'scale(1.5)'

    progressCounter()

    bool = false
  }

  if (counter1 === -1) {
    Array.from(sections).forEach(section => {
      if (section.classList[0] === 'contact') {
        return
      }

      section.style.left = '-100vw'
    })

    counter1 = 4
    counter2 = 5

    hero__wrapper.style.transform = 'scale(1.5)'
    contact__wrapper.style.transform = 'scale(1)'

    progressCounter()

    bool = false
  }

  progressCounter()
  return bool
}

window.addEventListener('wheel', e => {
  const deltaY = e.deltaY > 0

  if (deltaY) {
    counter1++
    counter2++
  } else {
    counter1--
    counter2--
  }

  pageController()
  progressCounter()

  if (bool) {
    (document.querySelector(`section:nth-of-type(${deltaY ? counter1 : counter2})`).style.left = `${deltaY ? '-100vw' : '0'}`)

    document.querySelector(`section:nth-of-type(${deltaY ? counter1 : counter2}) .section-wrapper`).style.transform = `scale(${deltaY ? '1.5' : '1'})`

    document.querySelector(`section:nth-of-type(${deltaY ? counter1 + 1 : counter2 + 1}) .section-wrapper`).style.transform = `scale(${deltaY ? '1' : '1.5'})`
  }

})

document.querySelector('.page__btn--left').addEventListener('click', () => {
  counter1--
  counter2--

  pageController() && (document.querySelector(`section:nth-of-type(${counter2})`).style.left = '0')

  if (bool) {
    document.querySelector(`section:nth-of-type(${counter2}) .section-wrapper`).style.transform = 'scale(1)'
    document.querySelector(`section:nth-of-type(${counter2 + 1}) .section-wrapper`).style.transform = 'scale(1.5)'
  }
})

document.querySelector('.page__btn--right').addEventListener('click', () => {
  counter1++
  counter2++

  pageController() && (document.querySelector(`section:nth-of-type(${counter1})`).style.left = '-100vw')

  if (bool) {
    document.querySelector(`section:nth-of-type(${counter2}) .section-wrapper`).style.transform = 'scale(1)'
    document.querySelector(`section:nth-of-type(${counter1}) .section-wrapper`).style.transform = 'scale(1.5)'
  }
})

document.querySelector('.wineyards__img-wrapper--grapes').addEventListener('mouseover', () => {
  document.querySelector('.wineyards__wrapper').style.opacity = '0.5'
})

document.querySelector('.wineyards__img-wrapper--grapes').addEventListener('mouseout', () => {
  document.querySelector('.wineyards__wrapper').style.opacity = '1'
})
