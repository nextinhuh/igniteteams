import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
    const navigation = useNavigation();

    function handleNew() {
        navigation.navigate('players', { group: 'Teste' });
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <Highlight
                    title='Nova turma'
                    subTitle='crie uma turma para adicionar as pessoas'
                />

                <Input
                    placeholder='Nome da turma'
                />

                <Button
                    onPress={handleNew}
                    title='Criar'
                    style={{ marginTop: 20 }}
                />
            </Content>
        </Container>
    );
}