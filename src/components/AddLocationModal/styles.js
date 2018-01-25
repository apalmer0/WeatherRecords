import { StyleSheet } from 'react-native'

const TEXT_COLOR = '#a6a6a6'

export default StyleSheet.create({
  modalContent: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    paddingBottom: '20%',
  },
  closeModalButton: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    bottom: 0,
  },
  closeModalText: {
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  headerText: {
    color: TEXT_COLOR,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    flexDirection: 'row',
  },
  inputField: {
    flex: 0.8,
    backgroundColor: '#fff',
    color: TEXT_COLOR,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  submitButton: {
    alignItems: 'center',
    flex: 0.2,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: TEXT_COLOR,
  },
  searchForm: {
    backgroundColor: '#d9d9d9',
    marginBottom: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: '10%',
  },
  resultContainer: {
    paddingBottom: 10,
    paddingLeft: 30,
    paddingTop: 10,
  },
  resultText: {
    color: '#999999'
  }
})
