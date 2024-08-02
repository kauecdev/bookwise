import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, CustomTextarea } from './styles'

interface TextareaProps extends ComponentProps<typeof CustomTextarea> {}

export const Textarea = forwardRef<
  ElementRef<typeof CustomTextarea>,
  TextareaProps
>((props: TextareaProps, ref) => {
  return (
    <Container>
      <CustomTextarea {...props} ref={ref} />
      <span>
        {props.value ? String(props.value).length : 0}/{props.maxLength}
      </span>
    </Container>
  )
})

Textarea.displayName = 'Textarea'
