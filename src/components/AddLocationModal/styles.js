import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalContent: {
    backgroundColor: '#5c5a5a',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '20%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: '20%',
  },
  closeModalButton: {
    alignItems: 'center',
    backgroundColor: '#330dae',
    borderRadius: 5,
    padding: 10,
  },
  closeModalText: {
    color: '#fff',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },
  form: {
    flexDirection: 'row',
  },
  inputField: {
    flex: 0.7,
    backgroundColor: '#a7a3a3',
    borderRadius: 5,
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  submitButton: {
    alignItems: 'center',
    borderRadius: 3,
    flex: 0.3,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#27AE60',
  },
  submitButtonText: {
    color: '#fff',
  }
})
