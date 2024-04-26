import { fonts } from '@src/services/theme/fonts'
import { Notifier, NotifierComponents } from 'react-native-notifier'
import { AlertComponentProps } from 'react-native-notifier/lib/typescript/components/Alert'

type Props = {
  title: string
  description?: string
} & Partial<AlertComponentProps>

export const alert = ({ title, description, alertType = 'info' }: Props) => {
  const isError = alertType === 'error'
  return Notifier.showNotification({
    title,
    description,
    duration: 2000,
    hideOnPress: true,

    Component: NotifierComponents.Alert,
    componentProps: {
      alertType,
      titleStyle: fonts.pageTitle,
      descriptionStyle: fonts.textParagraph,
      backgroundColor: isError ? '#FF4342' : 'gray',
      textColor: isError ? 'white' : 'black',
    },
  })
}

export const errorAlert = (description: string) => {
  alert({
    alertType: 'error',
    title: 'Ошибка',
    description,
  })
}
