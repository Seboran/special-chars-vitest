import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import HelloWorld from './HelloWorld.vue'
import { userEvent } from '@vitest/browser/context'


test('renders name', async () => {
  const { getByText, getByRole } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })
  await userEvent.type(getByRole('textbox'), "éèù")
})
