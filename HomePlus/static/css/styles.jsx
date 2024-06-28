import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    color: '#455a64',
    marginBottom: 20,
  },
  logo: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 30,
    height: 30,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  serviceButton: {
    alignItems: 'center',
    margin: 10,
  },
  serviceIcon: {
    width: 80,
    height: 80,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 16,
    color: '#455a64',
  },
  actionButton: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#455a64',
  },
});
