const doTheyHaveIt = () => Math.random() > 2.2

const getButter = () => new Promise((resolve, reject) => {
  setTimeout(doTheyHaveIt() ? resolve('Butter') : reject('Sorry, no butter'), 1000)
})
const getFlour = () => new Promise((resolve, reject) => {
  setTimeout(doTheyHaveIt() ? resolve('Flour') : reject('Sorry, no flour'), 1000)
})
const getSugar = () => new Promise((resolve, reject) => {
  setTimeout(doTheyHaveIt() ? resolve('Sugar') : reject('Sorry, no sugar'), 1000)
})
const getEggs = () => new Promise((resolve, reject) => {
  setTimeout(doTheyHaveIt() ? resolve('Eggs') : reject('Sorry, no eggs'), 1000)
})

const getIngredientsFromTheSuperMarket = async () => {
  try {
    const butter = await getButter()
    const flour = await getFlour()
    const sugar = await getSugar()
    const eggs = await getEggs()
    return [
      butter,
      flour,
      sugar,
      eggs,
    ]
  } catch(e) { return e }
}

const getIngredientsOnline = async () => {
  try {
    return await Promise.all([
      getButter(),
      getFlour(),
      getSugar(),
      getEggs(),
    ])
  } catch (e) { return e }
}

const mix = async (ingredients) => 'Cake Mix'
const cook = async (cakeMix) => 'Hot Cake'
const stand = async (hotCake) => '🍰'

const bakeACake = async () => {
  const ingredients = await getIngredientsOnline()
  const cakeMix = await mix(ingredients)
  const hotCake = await cook(cakeMix)
  const cake = await stand(hotCake)
  return cake
}

const freshCake = bakeACake().then((cake) => console.info(cake))
