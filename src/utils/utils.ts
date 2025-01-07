interface Person {
  name: string
  age: number
  isStudent: boolean
  hobby: string
  sex: Sex
}

enum Sex {
  man,
  woman,
}

type Student = Pick<Person, 'age' | 'name'>

export const testJs = () => {
  const student: Student = {
    name: '',
    age: 0,
  }

  const xiaoW: Person = {
    name: '小王',
    age: 22,
    sex: 0,
    hobby: 'hehe',
    isStudent: true,
  }

  console.log(student)
  console.log(xiaoW)
}
