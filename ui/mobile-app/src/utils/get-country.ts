import { nationalities } from '@src/constants/nationalities'
import { UserNationalityIn } from '@src/shared/generated/types/graphql'

export const getCountryByCode = (code: string): UserNationalityIn | undefined => {
  const country = nationalities?.find(nation => nation.value === code)

  if (!country) return undefined
  return { country: country?.label, code }
}
