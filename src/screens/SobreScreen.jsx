import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../config/styles";
export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={styles.alinhamento} variant="displaySmall">Página Sobre!</Text>
        <Text>{"\n"}</Text>
        <Text>
          O Dia Internacional do Jazz é uma comemoração internacional que foi
          declarada pela Organização das Nações Unidas em 2011 como sendo "para
          destacar o jazz e o seu papel diplomático de unir as pessoas em todos os
          cantos do mundo".[1] A data é comemorada anualmente no dia 30 de
          abril.[2] A ideia veio do pianista de jazz e Embaixador da Boa Vontade
          da UNESCO, Herbie Hancock. A celebração é reconhecida nos calendários da
          UNESCO e das Nações Unidas.[3][4] Na sede das Nações Unidas, em Nova
          Iorque, a celebração do Dia Internacional do Jazz, no ano de 2022,
          contou com a presença do All-Star Global Concert, além de Herbie
          Hancock, Gregory Porter, Shemekia Copeland, Marcus Miller, Mark
          Whitfield, Hiromi, Linda Oh, David Sanborn, Randy Brecker, Ravi
          Coltrane, Zakir Hussain, Brian Blade e diversos outros músicos do
          cenário musical do jazz.[5]
        </Text>
      </View>
    </View>
  );
}