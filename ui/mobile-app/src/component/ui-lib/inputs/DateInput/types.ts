export type DateInputProps = {
  onChange: (text: string) => void
  onCancel: () => void
  open: boolean
  value: string
  maxDate?: Date
}
