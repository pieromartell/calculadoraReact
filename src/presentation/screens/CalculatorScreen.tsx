import React from 'react';
import {Pressable, Text, View} from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorBuuton } from '../components/CalculatorButon';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30,paddingBottom:20}}>
            <Text style={styles.mainResult}>15000</Text>
            <Text style={styles.subresult}>15</Text>
        </View>
        
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>console.log('C')}  label = "C" blackText  color={colors.lightGray}/>
            <CalculatorBuuton onPress={()=>console.log('+/-')}  label = "+/-" blackText color={colors.lightGray}/>
            <CalculatorBuuton onPress={()=>console.log('del')}  label = "del" blackText color={colors.lightGray}/>
            <CalculatorBuuton onPress={()=>console.log('/')}  label = "/" blackText color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>console.log("7")} label = "7" />
            <CalculatorBuuton onPress={()=>console.log("8")} label = "8" />
            <CalculatorBuuton onPress={()=>console.log("9")} label = "9" />
            <CalculatorBuuton onPress={()=>console.log("X")} label = "X" color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>console.log("4")} label = "4" />
            <CalculatorBuuton onPress={()=>console.log("5")} label = "5" />
            <CalculatorBuuton onPress={()=>console.log("6")} label = "6" />
            <CalculatorBuuton onPress={()=>console.log("-")} label = "-" color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>console.log("1")} label = "1" />
            <CalculatorBuuton onPress={()=>console.log("2")} label = "2" />
            <CalculatorBuuton onPress={()=>console.log("3")} label = "3" />
            <CalculatorBuuton onPress={()=>console.log("+")} label = "+" color={colors.orange}/>
        </View>

        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>console.log("0")} label = "0" doubleSize/>
            <CalculatorBuuton onPress={()=>console.log("3")} label = "3" />
            <CalculatorBuuton  onPress={()=>console.log("=")} label = "=" color={colors.orange}/>
        </View>




    </View>
  );
};
