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
  textInput: {
    width: '200@ms',
    height: '50@mvs',
    borderWidth: '1@ms',
  },
});

export default styles;
