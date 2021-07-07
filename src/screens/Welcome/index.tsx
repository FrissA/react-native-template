import React from 'react';

import { View } from 'react-native';

import Text from '@components/Text';
import Button from '@components/TextButton';

import layoutStyles from '@styles/layout';

const Welcome: React.FC<{}> = () => (
  <View style={[layoutStyles.flex, layoutStyles.justifyCenter, layoutStyles.alignCenter]}>
    <Text>Hello, World!!</Text>
    <Button>Fun</Button>
    <Text>Bye Bye!</Text>
  </View>
);

export default Welcome;
