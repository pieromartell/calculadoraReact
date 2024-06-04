import React from 'react';
import {Pressable, Text, View} from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorBuuton } from '../components/CalculatorButon';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
const {number,buildNumber} = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30,paddingBottom:20}}>
            <Text style={styles.mainResult}>{number}</Text>
            <Text style={styles.subresult}>15</Text>
        </View>
        
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>console.log('C')}  label = "C" blackText  color={colors.lightGray}/>
            <CalculatorBuuton onPress={()=>console.log('+/-')}  label = "+/-" blackText color={colors.lightGray}/>
            <CalculatorBuuton onPress={()=>console.log('del')}  label = "del" blackText color={colors.lightGray}/>
            <CalculatorBuuton onPress={()=>console.log('/')}  label = "/" blackText color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("7")} label = "7" />
            <CalculatorBuuton onPress={()=>buildNumber("8")} label = "8" />
            <CalculatorBuuton onPress={()=>buildNumber("9")} label = "9" />
            <CalculatorBuuton onPress={()=>console.log("X")} label = "X" color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("4")} label = "4" />
            <CalculatorBuuton onPress={()=>buildNumber("5")} label = "5" />
            <CalculatorBuuton onPress={()=>buildNumber("6")} label = "6" />
            <CalculatorBuuton onPress={()=>console.log("-")} label = "-" color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("1")} label = "1" />
            <CalculatorBuuton onPress={()=>buildNumber("2")} label = "2" />
            <CalculatorBuuton onPress={()=>buildNumber("3")} label = "3" />
            <CalculatorBuuton onPress={()=>console.log("+")} label = "+" color={colors.orange}/>
        </View>

        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("0")} label = "0" doubleSize/>
            <CalculatorBuuton onPress={()=>buildNumber(".")} label = "." />
            <CalculatorBuuton  onPress={()=>console.log("=")} label = "=" color={colors.orange}/>
        </View>




    </View>
  );
};
