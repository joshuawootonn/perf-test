import {Button as MUIButton} from '@mui/material'
import { forwardRef } from 'react'

export const Button = forwardRef(function Button({variant, ...rest}, ref) {
return <MUIButton ref={ref} variant={variant} {...rest}></MUIButton>
})