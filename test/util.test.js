import { tabAttributes } from '../src/util'

describe('tabAttributes', () => {
  test('must handle sorthand name attributes', () => {
    expect(tabAttributes('tab title')).toBe('name="title"')
    expect(tabAttributes('tab "My Title"')).toBe('name="My Title"')
  })

  test('must handle html attributes', () => {
    expect(tabAttributes('tab id="tab-id"')).toBe('id="tab-id"')
    expect(tabAttributes('tab name="some-name"')).toBe('name="some-name"')
  })

  test('must handle vue binded attributes', () => {
    expect(tabAttributes('tab :id="tabId"')).toBe(':id="tabId"')
  })

  test('must handle mmixed attributes', () => {
    expect(tabAttributes('tab :id="tabId" class="some-class"')).toBe(':id="tabId" class="some-class"')
  })

  test('must handle sorthand name and mixed attributes', () => {
    expect(tabAttributes('tab title :id="tabId" class="some-class"')).toBe('name="title" :id="tabId" class="some-class"')
    expect(tabAttributes('tab "My Title" :id="tabId" class="some-class"')).toBe('name="My Title" :id="tabId" class="some-class"')
  })
})
