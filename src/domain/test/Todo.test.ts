import { Todo } from '../Todo'
import moment from 'moment-timezone'

describe('Todoドメインのテスト', function () {
  it('アプリケーション要件的なid,createAt,updateAtは外部から注入できる', function () {
    const todo = new Todo('タイトル', '説明文')
    todo.id = 'dummy'
    todo.createdAt = moment('20220110')
    todo.updatedAt = moment('20220110')

    expect(todo.id).toEqual('dummy')
    expect(todo.createdAt).toEqual(moment('20220110'))
    expect(todo.updatedAt).toEqual(moment('20220110'))
  })
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
