import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Drawer } from 'react-native-paper';
import { Badge } from 'react-native-paper';

export default function Configuracoes({ navigation }) {
  const [active, setActive] = useState('');

return (
    <View style={styles.container}>
       <Drawer.Section title="Some title">
          <Drawer.Item
            label="First Item"
            active={active === 'first'}
            onPress={() => setActive('first')}
          />
          <Drawer.Item
            label="Second Item"
            active={active === 'second'}
            onPress={() => setActive('second')}
          />
        </Drawer.Section>
        <Badge>2</Badge>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});