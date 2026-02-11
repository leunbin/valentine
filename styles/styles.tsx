import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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

  subText: {
    fontSize: 14,
    color: '#464646'
  },

  loveContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },

  loveGif: {
    width: 200,
    height: 200,
  },

  loveText: {
    fontSize: 40,
    fontFamily: 'font',
    marginBottom: 40,
  }
});
