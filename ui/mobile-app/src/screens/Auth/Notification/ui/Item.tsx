import { BaseModal } from '@src/component/modals/base-modal'
import { CenterModal } from '@src/component/modals/center-modal'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { NotificationFragment } from '@src/shared/generated/types/graphql'
import { formatDate, formatDateFromISO } from '@src/shared/lib/date'
import { formatTimestamp } from '@src/utils/format-date'
import React, { useState } from 'react'
import { View, Pressable, Image } from 'react-native'

export const Item = ({ item }: { item: NotificationFragment }) => {
  const source = require('@src/img/background.png')

  const [showNotification, setShowNotification] = useState(false)

  return (
    <View>
      <Pressable
        onPress={() => setShowNotification(true)}
        style={{ flexDirection: 'row', gap: 8, paddingBottom: 12, alignItems: 'center' }}>
        <View
          style={{ height: 40, width: 40, borderRadius: 25, backgroundColor: 'gray' }}>
          <Image source={source} style={{ width: 40, height: 40, borderRadius: 25 }} />
        </View>
        <View>
          <Typography variant='userName' style={{ fontSize: 14 }}>
            {item.title}
          </Typography>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Typography color='placeholder' variant='textSmall'>
            {formatTimestamp(item.createdAt)}
          </Typography>
        </View>
      </Pressable>
      <CenterModal visible={showNotification} onClose={() => setShowNotification(false)}>
        <View style={{ gap: 8 }}>
          <Typography variant='pageTitle' style={{ textAlign: 'center' }}>
            {item.title}
          </Typography>
          <Typography variant='textParagraph' style={{ textAlign: 'center' }}>
            {item.text}
          </Typography>
        </View>
      </CenterModal>
    </View>
  )
}
