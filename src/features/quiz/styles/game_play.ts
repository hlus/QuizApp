import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 40,
  },
  questionContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionCard: {
    borderRadius: 20,
    width: '90%',
    height: '40%',

    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  questionText: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    padding: 20,
  },
  optionsWrapper: {
    borderTopWidth: 1,
    padding: 5,
    borderColor: '#CACACA',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
