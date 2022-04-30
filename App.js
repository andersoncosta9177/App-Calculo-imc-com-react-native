import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableHighlight, SafeAreaView } from 'react-native';



function App() {
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [balanca, setBalanca] = useState(require('./images/balanca.png'))
  const [res, setImc] = useState('')

  const resImg = [
    require('./images/abaixo.png'),
    require('./images/normal.png'),
    require('./images/acima.png'),
    require('./images/obesidade2.png'),
    require('./images/obesidade3.png'),
    // require('./images/balanca.png'),


  ]
  // logica dos calculos

  const calcImc = () => {
    if (peso == 0 || !peso) {
      alert('Informe o peso')
      return
    }
    if (altura == 0 || !altura) {
      alert('Informe a altura')
    }
    var res = peso / (altura ** 2);
    setImc('Seu IMC esta em: ' + res.toFixed(1))




    if (res <= 18.5) {
      setBalanca(resImg[0])
    }
    else if(res <= 24.9){
      setBalanca(resImg[1])
    }
    else if(res <= 29.9){
      setBalanca(resImg[2])
    }
    else if(res <= 34.9){
      setBalanca(resImg[3])
    }
    else if(res <= 39.9){
      setBalanca(resImg[4])
    }












  }



  return (

    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.banner}>
        <Text style={estilos.titulo}>Cálculo de IMC</Text>
      </View>

      <View>
        <Text style={estilos.label}>Informe seu peso:</Text>
        <TextInput
          placeholder="000"
          style={estilos.txt}
          autoFocus={true}
          keyboardType={'numeric'}
          value={peso}
          onChangeText={text => setPeso(text)}
        >

        </TextInput>
      </View>

      {/* =======campo para digitar altura================ */}

      <View>
        <Text style={estilos.label}>Informe sua altura:</Text>
        <TextInput
          placeholder="0.00"
          style={estilos.txt}
          autoFocus={false}
          keyboardType={'numeric'}
          value={altura}
          onChangeText={text => setAltura(text)}
        >

        </TextInput>
      </View>


      <TouchableHighlight
        style={estilos.btnCalc}
        onPress={() => calcImc()}
      >
        <Text style={estilos.txtBtn}>Calculadora imc</Text>

      </TouchableHighlight>
      <View style={estilos.viewRes}>
        <Text style={estilos.textRes}>{res}</Text>
      </View>


      <Image
        style={estilos.balanca}
        source={balanca}

      />


    </SafeAreaView>

  )
}
const estilos = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5'

  },
  // corpo: {
  //   padding: 10,
  //   // backgroundColor: '#E0FFFF'


  // },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10

  },

  label: {
    color: '#00CED1',
    fontSize: 18,

  },
  titulo: {
    color: '#556B2F',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    textTransform: "uppercase"
  },

  btnCalc: {
    backgroundColor: '#00CED1',
    justifyContent: "center",
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    height: 50,
    marginTop: 10,


  },
  txtBtn: {
    color: '#F8F8FF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',


  },

  balanca: {
    width: '100%',
    marginTop: 77,
    height: 250,
    // marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewRes: {
    width: '100%',
    height: 50,
    marginTop: 35,
    backgroundColor: '#D1EEEE',
    borderRadius: 8,


  },
  textRes: {
    color: '#556B2f',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  banner: {
    backgroundColor: '#FFE4B5',
    marginTop: 0,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.45,
    shadowRadius: 13.97,

    elevation: 25,
  }

})




export default App;



