import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 24,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '40%',
    paddingBottom: '90%',
  },
  pickerWrapper: {
    width: '60%',
    borderWidth: 2,
  },
  amountInput: {
    width: '60%',
    borderWidth: 2,
    fontSize: 24,
  },
  selectText: {
    fontSize: 24,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
