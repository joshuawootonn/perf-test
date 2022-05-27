import { Select, Style, TextInput } from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'
import {Button} from '../muiButton/button'

// Register your components here!

function HelloWorld(props) {
  return <p {...props}>Hello, world!</p>
}

ReactRuntime.registerComponent(HelloWorld, {
  type: 'hello-world',
  label: 'Hello, world!',
  props: {
    className: Style({ properties: Style.All }),
  },
})

ReactRuntime.registerComponent(Button, {
  type: 'button',
  label: 'Button',
  props: {
    className: Style({ properties: Style.All }),
    children: TextInput(),
    variant: Select({
      options: [
        {label: "text",value: "text"},
        {label: "contained",value: "contained"},
        {label: "outlined",value: "outlined"},
      ]
    })
  },
})