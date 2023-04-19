import colors from '@theme/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  errorBox: {
    flex: 1,
    justifyContent: 'center',
    padding: '20@ms',
    backgroundColor: 'rgba(225,94,108,1)',
  },
  title: {
    fontSize: '25@ms',
    color: colors.WHITE,
    marginBottom: '10@mvs',
  },
  subTitle: {
    fontSize: '20@ms',
    color: colors.WHITE,
    marginBottom: '10@mvs',
  },
  description: {
    fontSize: '14@ms',
    color: colors.WHITE,
  },
});

export default styles;
