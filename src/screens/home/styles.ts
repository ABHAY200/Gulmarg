import {ScaledSheet} from 'react-native-size-matters';

import colors from '@theme/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.BLACK,
    fontSize: '20@ms',
  },
});

export default styles;
