import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgimg:{
    width: '100%',
    flex: 1,
  },

  passwordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'font'
  },

  hintText:{
    marginTop: 12,
    fontSize: 14,
    color: '#323232',
    fontStyle: 'italic'
  },

  title: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 40,
    fontFamily: 'font'
  },

  image: {
    width: 150,
    height: 150,
  },
  
  buttonRow: {
    flexDirection: 'row',
    gap: 20
  },

  ybutton: {
    backgroundColor: '#FF4D6D',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },

  nbutton:{
    backgroundColor: '#323232',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalSubText:{
    fontSize: 15,
    color:'#3c3c3c',
    marginBottom: 5
  },

  subText: {
    fontSize: 12,
    color: '#464646'
  },

  loveContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },

  loveGif: {
    width: 200,
    height: 200,
  },

  loveText: {
    fontSize: 30,
    fontFamily: 'font',
    marginBottom: 40,
  },

  loginInput:{
    width: 160,
    height: 40,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    letterSpacing: 5,
  },

  envelope:{
    backgroundColor: '#FAEBCD',
    padding: 24,
    borderRadius: 20,
    width: 260,
    alignItems: 'center',
  },

  envelopeTitle:{
    fontSize: 18,
    marginBottom: 12
  },

  envelopeText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 12,
  }
});
