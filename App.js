import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const DigitosASCII = [
  [
    '###',
    '# #',
    '# #',
    '# #',
    '###',
  ],
  [
    '## ',
    ' # ',
    ' # ',
    ' # ',
    '###',
  ],
  [
    '###',
    '  #',
    '###',
    '#  ',
    '###',
  ],
  [
    '###',
    '   #',
    '###',
    '   #',
    '###',
  ],
  [
    '# #',
    '# #',
    '###',
    '  #',
    '  #',
  ],
  [
    '###',
    '#  ',
    '###',
    '  #',
    '###',
  ],
  [
    '###',
    '#  ',
    '###',
    '# #',
    '###',
  ],
  [
    '###',
    '  #',
    '  #',
    '  #',
    '  #',
  ],
  [
    '###',
    '# #',
    '###',
    '# #',
    '###',
  ],
  [
    '###',
    '# #',
    '###',
    '  #',
    '###',
  ],
];

function App() {
  const [digitos, setDigitos] = useState('');
  const [caracter, setCaracter] = useState('#');

  function cambiarTexto(text) {
    const input = text.replace(/\D/g, '');
    setDigitos(input);
  }

  function cambiarCaracter(text) {
    setCaracter(text);
  }

  const array = digitos.split('').map(digito => parseInt(digito));
  const ascii = array.map(digito =>
    DigitosASCII[digito].map(simbolo => simbolo.replace(/#/g, caracter))
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digitos"
          value={digitos}
          onChangeText={cambiarTexto}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Simbolo"
          maxLength={1}
          value={caracter}
          onChangeText={cambiarCaracter}
        />
      </View>
      <View style={styles.ASCII}>
        {ascii.map((digito, index) => (
          <View style={styles.container} key={index}>
            {digito.map((simbolo, index) => (
              <Text key={index}>{simbolo}</Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 50,
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 5,
    margin: 5,
  },
  ASCII: {
    fontSize: 18,
    flexDirection: 'row',
    marginTop: 20,
  },
};

export default App;