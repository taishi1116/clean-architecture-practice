import { Todo } from '../Todo'

describe('Todoドメインのビジネスルールテスト', function () {
  it('タイトルと説明文が入力済みの場合、trueを返す', function () {
    const todo = new Todo('タイトル', '説明文')
    expect(todo.isTitleFilled()).toBeTruthy()
    expect(todo.isDescriptionFilled()).toBeTruthy()
  })
  it('タイトルが未入力の場合、falseを返す', function () {
    const todo = new Todo('', '説明文')
    expect(todo.isTitleFilled()).toBeFalsy()
  })
  it('説明文が未入力の場合、falseを返す', function () {
    const todo = new Todo('タイトル', '')
    expect(todo.isDescriptionFilled()).toBeFalsy()
  })
})
