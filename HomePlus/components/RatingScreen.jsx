import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform, 
  Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const RatingScreen = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    alert(`Calificación: ${rating} estrellas\nComentario: ${comment}`);
    navigation.navigate('Services');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          
          {/* Logo */}
          <Image 
            source={require('../assets/logo.jpeg')} 
            style={styles.logo} 
            resizeMode="contain" 
          />

          <Text style={styles.title}>Califica tu servicio</Text>

          <View style={styles.userInfoContainer}>
            <Icon 
              name="person-circle-outline" 
              size={60} 
              color="#0288D1" 
              style={styles.userIcon} 
            />
            <Text style={styles.userName}>Juan Pérez</Text>
          </View>

          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                <Text style={styles.star}>{star <= rating ? '★' : '☆'}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="COMENTARIOS:"
            value={comment}
            onChangeText={setComment}
            multiline
            onBlur={() => Keyboard.dismiss()}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#B3E5FC',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    maxWidth: width * 0.9,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#3E3E3E',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    marginRight: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    fontSize: 40,
    marginHorizontal: 5,
    color: '#FFD700',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RatingScreen;
